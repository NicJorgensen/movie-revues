import vuex from 'vuex';
import axios from 'axios';
import vue from 'vue';

vue.use(vuex);

let movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=e49c6a401bd2f605d1fdd38fffc8b670&page=1&include_adult=false&query=',
    timeout: 3000
})

export default new vuex.Store({
    state: {
        user: {
            name: 'Nic'
        },
        searchResults: [],
        activeMovie: {}

    },
    mutations: {
        addResults(state, payload) {
            state.searchResults = payload
            console.log(this.searchResults)
        },
        setActiveMovie(state, payload) {
            state.activeMovie = payload
        }
    },
    actions: {
        getMovies({ commit, dispatch }, title) {
            movieDB(title)
                .then(res => {
                    commit("addResults", res.data.results);
                    console.log(res)
                })
                .catch(err => {
                    console.error(err);
                });
        },
        setActiveMovie({ commit, dispatch }, payload) {
            commit("setActiveMovie", payload)
        }
    }
})