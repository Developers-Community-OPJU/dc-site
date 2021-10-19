import axios from "axios";
import { resolve } from "path";
import { nextTick } from "process";
import qs from 'querystring';


// CONFIGURING AXIOS HEADER
const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
};

const state = {
    projects: []
}

const getters = {
    LOAD_PROJECTS: (state) => {
        return state.projects;
    },
}
const mutations = {
    SET_PROJECTS: (state, issues) => {
        state.projects = issues;
    },
}

const actions = {
    // POST ISSUE METHOD
    POST_PROJECT: (context, project) => {
        return new Promise((resolve, reject) => {
            // POST ISSUE CALL            
            axios.post("/api/projects", qs.stringify(project), config)
                .then((res) => {
                    resolve(res);
                })
                .catch((error) => {
                    alert(error);
                    reject(error)
                });
        });
    },

    // FETCH ALL ISSUES FROM API
    FETCH_PROJECTS: async (context, projects) => {
        try {
            const res = await axios.get("/api/projects");
            console.log(res.data)
            context.commit('SET_PROJECTS', res.data.projects);
        } catch (error) {
            console.error(error)
        }
    },
    // FETCH ALL ISSUES FROM API
    VIEW_PROJECT: async (context, id) => {
        return new Promise((resolve, reject) => {
            // POST ISSUE CALL            
            axios.get(`/api/projects/${id}`)
                .then((res) => {
                    resolve(res);
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