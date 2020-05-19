const state = {
    count : 0,
    history: [],
    limit : 5
}
const actions = {
    increment ({commit}){commit('increment')},
    decrement ({commit}){commit('decrement')},
    incrementIfodd ({commit, state}){
        if((state.count + 1) % 2 === 0)
            commit('increment')
    },
    incrementAsync ({commit}){
        setTimeout(()=>{
            commit('increment')
        },1000)
}
}

const mutations = { //setter
    increment(state){
        state.count++
        state.history.push('increment')
        //push 배열에 값을 집어넣는다
    },
    decrement(state){
        state.count--
        state.history.push('decrement')

    },

}

const getters = {
    count(state){ return state.count},

    recentHistory(state){
        const end = state.history.length
        const begin = end - state.limit < 0 ? 0 : end- state.limit
        return state.history.slice(begin, end).join(', ')
    }
}

export default {
    name: 'counter',
    namespaces : true,
    state,
    actions,
    mutations,
    getters
}