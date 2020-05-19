
const state = {
    userid : '',
    passwd : ''
}
const actions = {
    login({commit}){
        commit('login')},
    join({commit}){
        commit('join')}

}
const mutations = {
    login(){
        alert('로그인완료')
    },

    join(){
        (alert('회원가입버튼'))
    }
}
const getters = {

}
export default {
    name : 'player',
    namespace : true,
    state,
    actions,
    mutations,
    getters
}