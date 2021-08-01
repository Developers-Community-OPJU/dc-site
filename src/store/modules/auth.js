import { rejects } from "assert";
import axios from "axios";
import { resolve } from "path";
import qs from 'querystring';
import router from 'vue-router'

// CONFIGURING AXIOS HEADER
const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};


const state = {
  currentUser: localStorage.getItem('currentUser') || null,
  auth: {
    token: localStorage.getItem('token') || null,
    loggedIn: () => {
      (this.auth.token !== null) ? true : false
    }
  },
}

const getters = {
  getCurrentUser: (state) => {
    return state.currentUser;
  },
  getToken: (state) => {
    return state.auth.token;
  },
  loggedIn: (state) => {
    return state.auth.token !== null;
  }
}
const mutations = {
  setCurrentUser: (state, credentials) => {
    state.currentUser = credentials;
  },
  generateToken: (state, token) => {
    state.auth.token = token;
  },
  destroyToken: (state) => {
    state.auth.token = null;
    state.currentUser = null;
  },
  logout: (state) => {
    state.auth.loggedIn = false;
    state.auth.token = null;
  },

}

const actions = {
  // SET CURRENT USERS
  setCurrentUser(context, credentials) {
    localStorage.setItem('currentUser', credentials)
    context.commit('setCurrentUser', credentials);
  },
  // LOGIN LOGIC
  generateToken(context, credentials) {
    return new Promise((resolve, reject) => {
      axios.post("/api/login", qs.stringify(credentials), config)
        .then((res) => {
          if (res.data.allowed) {
            localStorage.setItem('token', res.data.token);
            context.commit('generateToken', res.data.token)
            resolve(res)
          }
          else {
            localStorage.removeItem('token', null);
            resolve(res)
          }
        })
        .catch((error) => {
          alert(error);
          reject(error)
        });
    });

  },
  // DESTROY TOKEN
  destroyToken: (context) => {
    if (context.getters.loggedIn) {
      try {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        context.commit('destroyToken');
      } catch (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        context.commit('destroyToken');
      }
    }
  },

  //REGISTRATION LOGIC
  addUser: async (context, userDetails) => {
    try {
      const res = await axios.post("/api/signUp", qs.stringify(userDetails), userDetails)
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
}

export default {
  state, getters, actions, mutations
}