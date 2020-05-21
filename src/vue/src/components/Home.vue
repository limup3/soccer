<template>
    <div id = "app">

        <div v-if=auth>
            <Layout>

                <template #header ="header">
                    <router-link to="/home"><h1 class="title">{{header.header}}</h1></router-link>
                    <router-link to="/mypage"><span class="join">{{header.mypage}}</span></router-link>
                    <span @click="logout" class="login">{{header.logout}}</span>
                </template>

                <template #sidebar>
                    <ul class="menu">
                        <li v-for="i of sidebars" :key="i.menu">
                            <!--                            <a @click="menu(i.menu)">{{i.menu}}</a>-->
                            <router-link :to="{path:i.link}">{{i.menu}}</router-link>
                            <!--                        <h3 v-if="i.menu ==='회원수'">-->
                            <!--                            <router-link to="/counter">{{i.menu}}</router-link>-->
                            <!--                        </h3>-->
                            <!--                        <h3 v-else>{{i.menu}}</h3>-->

                        </li>
                    </ul>

                </template>

                <template #content>
                    <router-view/>
                </template>


            </Layout>

            </div>


            <!--            로그인 성공 화면-->
        <div v-else>
            <Layout>
                <template #header ="header">
                    <router-link to="/home"><h1 class="title">{{header.header}}</h1></router-link>
                    <router-link to="/join"><span class="join">{{header.join}}</span></router-link>
                    <router-link to="/login"><span class="login">{{header.login}}</span></router-link>
                </template>
                <template #sidebar>
                    <ul class="menu">
                        <h3>광고판</h3>
                    </ul>
                </template>
                <template #content>
                    <router-view/>
                </template>
            </Layout>

            </div>

    </div>
</template>

<script>
//import Layout  from "./common/Layout";
import Layout from "../components/common/Layout.vue"
import {mapState} from "vuex";
    export default {
        computed : {
            ...mapState(
                {
                    auth : state => state.player.auth
                }
            )

        },
        components : {Layout},
        data : ()=>{
            return {
                sidebars: [
                    {menu: '등록', link:'/register'},
                    {menu: '목록', link:'/list'},
                    {menu: '검색', link:'/search'},
                    {menu: '수정', link:'/update'},
                    {menu: '삭제', link:'/delete'},
                    {menu: '회원수', link:'/vuexCounter'}
                ]

            }
        },
        methods:{
            logout(){
                this.$store.dispatch('player/logout')
            }
        }


        // methods:{
        //     menu(i){
        //         switch (i) {
        //             case '쓰기':
        //                 alert('0')
        //                 break;
        //             case '목록':
        //                 alert('1')
        //                 break;
        //             case '검색':
        //                 alert('2')
        //                 break;
        //             case '수정':
        //                 alert('3')
        //                 break;
        //             case '회원수':
        //                 alert('4')
        //                 break;
        //             case '삭제':
        //                 alert('5')
        //                 break;
        //
        //         }
        //     }
        // }
    }
</script>
<style scoped>
    ul.menu{
        position: relative;
        padding: 5px;
        list-style: none;
        font-style: italic;
    }
    .title{width: 300px;margin: 0 auto}
    .login{margin-right: 50px; float: right}
    .join{margin-right: 50px; float: right}
    .footer{width: 300px; margin: 0 auto}
</style>