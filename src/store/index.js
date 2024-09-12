import { createStore } from "vuex";
import defaultState, { InitialGoals, InitialPoints } from "./defaultState";
import updateEloRatings from "./utils"

const store = createStore({
    state() {
        return defaultState
    },
    getters: {
        getLatestRanking(state) {

            state.people.map((person) => {
                // Total Points played by a user
                person.points = state.matches.filter((match) => match.winner === person.id).reduce((totalPoints, match) => totalPoints + 2, InitialPoints)

                // Total Match played by a user
                person.total_matches = state.matches.filter((match) => match.participants_id.includes(person.id)).length

                person.rating = person.points * 5 / person.total_matches


                person.won_matches = state.matches.filter((match) => match.participants_id.includes(person.id) && match.winner === person.id).length

                person.lost_matches = state.matches.filter((match) => match.participants_id.includes(person.id) && match.winner !== person.id).length

                // Total Goal-For
                person.goal_for = state.matches.filter((match) => match.participants_id.includes(person.id)).reduce((totalGoals, match) => {
                    const userScoreIndex = match.participants_id.indexOf(person.id)
                    return totalGoals + match.score[userScoreIndex]
                }, InitialGoals)

                // Total Goal-Against
                person.goal_against = state.matches.filter((match) => match.participants_id.includes(person.id)).reduce((totalGoals, match) => {
                    const userScoreIndex = match.participants_id.findIndex((item) => item !== person.id)
                    return totalGoals + match.score[userScoreIndex]
                }, InitialGoals)

                // Total Goal-Difference
                person.goal_difference = person.goal_for - person.goal_against
            })
            state.people.forEach((per, index) => {
                let ratingg = parseFloat(per.rating);

                // If the parsed rating is not a number, set it to 0
                if (isNaN(ratingg)) {
                    ratingg = 0;
                }

                // Round the rating to 2 decimal places
                state.people[index].rating = parseFloat(ratingg.toFixed(2));

                // Log the rating for each person
                console.log(state.people[index].name, state.people[index].mmr);
            });

            // Sort the array in descending order based on the rating
            state.people.sort((a, b) => b.mmr - a.mmr);

            return state.people;
        },


    },
    mutations: {
        changeTab(state, index) {
            state.selectedTabIndex = index
        },
        changeBoard(state, newBoardIndex) {
            state.selectedBoardIndex = newBoardIndex
        },
        changeBoardId(state, newBoardId) {
            state.selectedBoardId = newBoardId
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
        AddMMR(state, mmr_data) {
            mmr_data.map((user_mmr) => {
                state.people.filter((person) => person.id === user_mmr.id)[0].mmr = user_mmr.mmr;
            })
        },
        getAllPlayer(state, people){
            state.people = people
        },
        getAllMatches(state, matches) {
            state.matches = matches
        },
        getAllBoard(state, boards) {
            state.boardList = boards
        },
        getCurrentBorad(state, index) {
            state.selectedBoardIndex = index
        },
        changeSelectedBoard(state, index) {
            state.selectedBoardIndex = index
        }

    },
    actions: {
        changeTab({ commit }, index) {
            commit('changeTab', index)
        },
        changeBoard({ commit }, newBoardIndex) {
            commit('changeBoard', newBoardIndex)
        },
        async changeBoardId({ commit }, newBoardId) {
            const res = await fetch('http://localhost:4000/users/user_01', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                body: JSON.stringify({
                    selectedBoardId: newBoardId
                })
            });
            if (res.ok) {
                console.log(res)
                commit('changeBoardId', newBoardId)
            }
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

        async UpdateMMR({ commit }, payload) {
            try {
                const winnerJson = await fetch(`http://localhost:4000/people/${payload.winner}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const winner = await winnerJson.json();
                const looserJson = await fetch(`http://localhost:4000/people/${payload.looser}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const looser = await looserJson.json();
                const { winnerNewMMR, looserNewMMR } = updateEloRatings(winner.mmr, looser.mmr)

                const response1 = await fetch(`http://localhost:4000/people/${winner.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ mmr: winnerNewMMR })
                });

                if (!response1.ok) {
                    throw new Error('Failed to update winner MMR');
                }

                const response2 = await fetch(`http://localhost:4000/people/${looser.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ mmr: looserNewMMR })
                });
                if (!response2.ok) {
                    throw new Error('Failed to update looser MMR');
                }
                commit('AddMMR', [{ id: winner.id, mmr: winnerNewMMR }, { id: looser.id, mmr: looserNewMMR }])
            } catch (error) {
                console.error('Error updating MMR:', error);
            }
        },

        async getAllPlayers({ commit }) {
            const res = await fetch('http://localhost:4000/people');
            const players = await res.json()
            commit('getAllPlayer', players)
        },

        async getAllMatches({ commit }) {
            const res = await fetch('http://localhost:4000/matches');
            const matches = await res.json()
            commit('getAllMatches', matches)
        },

        async getAllBoard({ commit }) {
            const res = await fetch('http://localhost:4000/board_list');
            const app_res = await fetch('http://localhost:4000/app_settings');
            const boards = await res.json()
            const currentBoard = await app_res.json()
            commit('getAllBoard', boards)
            commit('getCurrentBorad', currentBoard.selectedBoardIndex)
        },
        async changeSelectedBoard({ commit }, index) {
            const res = await fetch('http://localhost:4000/app_settings', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PATCH",
                body: JSON.stringify({
                    selectedBoardIndex: index
                })
            });
            if (res.ok) {
                commit('changeSelectedBoard', index)
            }
        }
    },
})


export default store;