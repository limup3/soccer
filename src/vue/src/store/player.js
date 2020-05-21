import axios from 'axios'
import router from '../router'

const state = {
    player : {},
    fail : false,
    auth : false,
    context : 'http://localhost:3000/'
}
const mutations = {
    LOGIN_COMMIT(state, data){
        state.auth = true
        state.player = data.player
        localStorage.setItem('token', data.token)
        localStorage.setItem('playerId',data.player.playerId)
        if(data.player.teamId !== 'K01'){
            alert('일반 사용자')
            router.push('/mypage')
        }else{
            alert('관리자')
            // 관리자
            // router.push('/')
        }
    },
    FAIL_COMMIT(state){
      state.fail =true

    },
    LOGOUT_COMMIT(state){
      localStorage.clear()
      state.auth = false
      state.player = {}

    },

    async join(){
        (alert('회원가입'))
    }
}

const actions = {
    async login({commit}, payload){
        const url = state.context + `players/${payload.playerId}/access`
        const headers = {
            authorization: 'JWT fefege..',
            Accept : 'application/json',
            'Content-Type': 'application/json'
        }

        axios.post(url, payload, headers)
            .then(({data})=>{
                if(data.result){
                    commit('LOGIN_COMMIT', data)
                }
               else{
                   commit('FAIL_COMMIT')
                }

            })
            .catch(()=>{
                alert('서버 전송 실패')
                state.fail = true
            })
    },
    async logout({commit}){
        commit('LOGOUT_COMMIT')}

}

const getters = {

}
export default {
    name : 'player',
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}