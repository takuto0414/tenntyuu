import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        planName: "",
    },
    mutations: {
        updateUser(state, user) {
            state.planName = user.planName;

        }
    },
    actions: {
        auth(context, user) {
            context.commit('updateUser', user);
        }
    },
    modules: {},
})

export default store
export const state = () => ({
    planName: "",
})

export const mutations = {
    updateUser(state, user) {
        state.planName = user.planName;

    },
    actions: {
        auth(context, user) {
            context.commit('updateUser', user);
        }
    },
    modules: {
        todos: {
            namespaced: true,
            state: () => ({
                list: []
            }),
        }
    }
}