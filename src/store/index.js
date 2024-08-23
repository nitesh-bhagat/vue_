import { createStore } from "vuex";
import defaultState from "./defaultState";

const store = createStore({
    state() {
        return defaultState
    },
    getters: {
        getLatestRanking(state) {
            return state.people.sort((a, b) => b.points - a.points)
        }
    },
    mutations: {
        changeTab(state, index) {
            state.selectedTabIndex = index
        },
        changeBoard(state, index) {
            state.selectedBoardIndex = index
        },
        AddMatch(state, payload) {
            state.matches.push(payload)

        },
        AddPointsToWinner(state, user_id) {
            // adding 2 points to winner's account
            const points = state.people.filter((person) => person.id === user_id)[0].points
            state.people.filter((person) => person.id === user_id)[0].points = points + 2;
        },
        AddToTotalMatch(state, participants_id) {

            participants_id.map((item) => {

                state.people.filter((person) => person.id === item)[0].total_matches += 1;
            })

        },
        getAllMatchesbyId(state, matches) {
            state.matches = matches
        }

    },
    actions: {
        changeTab({ commit }, index) {
            commit('changeTab', index)
        },
        changeBoard({ commit }, index) {
            commit('changeBoard', index)
        },
        AddMatch({ commit }, payload) {
            commit('AddMatch', payload)
            commit('AddPointsToWinner', payload.winner)
            commit('AddToTotalMatch', payload.participants_id)
        },

        async getAllMatchesbyId({ commit }, id) {
            const res = await fetch('http://localhost:4000/matches');
            const matches = await res.json()
            commit('getAllMatchesbyId', matches)
            console.log(matches, "fetched all matches")
        }
    },
})


export default store;