import Vue from 'vue'
import Router from 'vue-router'
import Join from '../components/member/Join'
import Login from '../components/member/Login'
import Calculator from '../components/common/Calculator'
import Counter from "../components/common/Counter";
import Register from "../components/common/Register";
import List from "../components/common/List";
import Search from "../components/common/Search";
import Update from "../components/common/Update";
import Delete from "../components/common/Delete";
import VuexCounter from "../components/common/VuexCounter";

Vue.use(Router)
export default new Router({
    mode:'history',
    routes : [
        {path: '/join', component: Join},
        {path: '/login', component: Login},
        {path: '/calculator', component: Calculator},
        {path: '/counter', component: Counter},
        {path: '/VuexCounter', component: VuexCounter},
        {path: '/register', component: Register},
        {path: '/list', component: List},
        {path: '/search', component: Search},
        {path: '/update', component: Update},
        {path: '/delete', component: Delete},

    ]



})