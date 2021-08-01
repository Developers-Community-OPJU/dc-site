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

}

const getters = {
    //   getCurrentUser : (state) => {
    //     return state.currentUser;
    //   },
}
const mutations = {
    //   logout: (state) => {
    //     state.auth.loggedIn = false;
    //     state.auth.token = null;
    //   },

}

const actions = {
    // SAVE BLOG TO DATABASE
    SAVE_BLOG: (context, data) => {
        return new Promise((resolve, reject) => {
            axios.post("/api/blog/publish", qs.stringify(data), config)
                .then((res) => {
                    alert(res.data.msg);
                })
                .catch((error) => {
                    alert(error);
                    reject(error)
                });
        });
    },

}

export default {
    state, getters, actions, mutations
}