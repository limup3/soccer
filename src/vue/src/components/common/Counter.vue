<template>
<div>
    <div>{{ count }}</div>
    <div @click="increment" class="btn operator">클릭수 올리기</div>
</div>
</template>

<script>
    export default {
        data () {
            return {
                count: 0 //state

            }
        },
        methods: { // 기능
            increment () {
                this.count++ // state
            }

        }
    }
</script>

<style scoped>
    .btn {
        background-color: #F2F2F2;
        border: 1px solid #999;
    }
    .operator {
        background-color: orange;
        color: white;
    }
</style>