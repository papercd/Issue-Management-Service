import {createStore} from "vuex"
import createPersistedState from "vuex-persistedstate"

const store = createStore({
    state: {
        username: '',
        roles: [],
    },

    getters: {
        isAuthenticated: state => {
            return state.username !== ''
        },
        hasRole: state => role => {
            return state.roles.includes(role)
        }
    },

    mutations: {
        setUsername: (state, username) => {
            state.username = username
        },
        setRoles: (state, roles) => {
            state.roles = roles
        },
        addRole: (state, role) => {
            state.roles.push(role)
        },
        logout: (state) => {
            state.username = ''
            state.roles = []
        }
    },

    plugins: [
        createPersistedState()
    ]
})

export default store