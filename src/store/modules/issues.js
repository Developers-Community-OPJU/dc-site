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
    issues: []
}

const getters = {
    LOAD_ISSUES: (state) => {
        return state.issues;
    },
}
const mutations = {
    SET_ISSUES: (state, issues) => {
        state.issues = issues;
    },
}

const actions = {
    // POST ISSUE METHOD
    POST_ISSUE: (context, issue) => {
        return new Promise((resolve, reject) => {
            // POST ISSUE CALL            
            axios.post("/api/issues", qs.stringify(issue), config)
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
    FETCH_ISSUES: async (context, issues) => {
        try {
            const res = await axios.get("/api/issues");
            context.commit('SET_ISSUES', res.data.issues);
        } catch (error) {
            console.error(error)
        }
    },


}

export default {
    state, getters, actions, mutations
}