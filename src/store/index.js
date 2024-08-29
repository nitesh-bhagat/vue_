import { createStore } from "vuex";
import defaultState, { InitialPoints } from "./defaultState";

const store = createStore({
    state() {
        return defaultState
    },
    getters: {
        getLatestRanking(state) {

            state.people.map((person) => {
                person.points = state.matches.filter((match) => match.winner === person.id).reduce((totalPoints, match) => totalPoints + 2, InitialPoints)
            })


            return state.people.sort((a, b) => b.points - a.points)
        },

    },
    mutations: {
        changeTab(state, index) {
            state.selectedTabIndex = index
        },
        changeBoard(state, newBoardIndex) {
            state.selectedBoardIndex = newBoardIndex
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
        getAllMatches(state, matches) {
            state.matches = matches
        },
        getAllBoard(state, boards) {
            state.selectedBoardIndex = boards.findIndex((boards) => boards.default)
            state.boardList = boards
        }

    },
    actions: {
        changeTab({ commit }, index) {
            commit('changeTab', index)
        },
        changeBoard({ commit }, newBoardIndex) {
            commit('changeBoard', newBoardIndex)
        },
        async AddMatch({ commit }, payload) {
            const res = await fetch('http://localhost:4000/matches', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(payload)
            })
            if (res.ok) {
                commit('AddMatch', payload)
            }
        },

        async getAllMatches({ commit }, id) {
            const res = await fetch('http://localhost:4000/matches');
            const matches = await res.json()
            commit('getAllMatches', matches)
        },

        async getAllBoard({ commit }) {
            const res = await fetch('http://localhost:4000/board_list');
            const boards = await res.json()
            commit('getAllBoard', boards)
        }
    },
})


export default store;