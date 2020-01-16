<template>
    <div class="container_home">
        <div class="top">
            <!-- <img style="width:100%;" src="@/assets/img/menu_top_bg.png" alt=""> -->
            <div @click="$router.push('/header1/monitor')">监控中心</div>
            <div><router-link to="/header1/application_home">应用中心</router-link></div>
            <div class="home_title">智慧灯杆综合管理平台</div>
            <div @click="$router.push('/header1/maintain_home')">运维管理</div>
            <div @click="$router.push('/header1/setting')">系统管理</div>
            <div class="light">
                <img src="../assets/img/light_effect.png" alt="">
            </div>
        </div>
        <div class="middle_content">
            <div class="left_nav">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="middle_nav">
                <div></div>
                <div></div>
            </div>
            <div class="right_nav">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style scoped>
    a {
        /* list-style: none; */
        color: #fff;
        text-decoration: none;
    }
    .container_home {
        background:#0c193a;
        height: 100%;

        min-width: 1800px;

        display: flex;
        flex-direction: column;
    }
    .top {
        background: url("../assets/img/menu_top_bg.png") no-repeat center;
        height: 80px;
    }
    .middle_content {
        flex: 1;
        padding: 10px;
        margin-top: 20px;
    }
    .middle_content > div {
        display: inline-block;
        width: 24.5%;
        margin-right: 0.5%;
        /* height: 300px; */
        height: 100%;
        /* background: #ededed; */
    }
    .middle_content > div:nth-child(2) {
        width: 50%;
    }
    .middle_content > div:nth-child(3) {
        margin-right: 0;
    }
    .left_nav > div {
        height: 24.5%;
        margin-bottom: 0.5%;
        /* background: #cccccc; */
    }
    .middle_nav > div:nth-child(1) {
        height: 74%;
        margin-bottom: 0.5%;
        /* background: #cccccc; */
    }
    .middle_nav > div:nth-child(2) {
        height: 24.5%;
        margin-bottom: 0.5%;
        /* background: #cccccc; */
    }
    .right_nav > div {
        height: 24.5%;
        margin-bottom: 0.5%;
        /* background: #cccccc; */
    }
/* add bg */
    .left_nav > div,
    /* .middle_nav > div, */
    .right_nav > div {
        background: url("../assets/img/home_box_bg.png") no-repeat center;
        background-size: 100% 100%;
        /* box-sizing: border-box; */
    }
    .middle_nav > div:nth-child(1) {
        background: url("../assets/img/map_line_frame.png") no-repeat center;
        background-size: 100% 100%;
    }
    .middle_nav > div:nth-child(2) {
        background: url("../assets/img/home_box_bgLong.png") no-repeat center;
        background-size: 100% 100%;
    }
/* font position setting */
    .top {
        position: relative;
    }
    .top > div {
        color: #fff;
        display: inline-block;
        position: absolute;
    }
    .top > div:nth-child(1) {
        left: 14.5%;
        bottom: 15%;
    }
    .top > div:nth-child(2) {
        left: 24%;
        bottom: 15%;
    }
    .home_title {
        /* margin: auto; */
        font-size: 3.7vh;
        left: 50%;
        bottom: 50%;
        transform: translate(-50%,100%);
        /* margin-left: -16.8%; */
    }
    .top > div:nth-child(4) {
        right: 24%;
        bottom: 15%;
    }
    .top > div:nth-child(5) {
        right: 14.5%;
        bottom: 15%;
    }
/* light */
    .light {
        /* background: url("../assets/img/light_effect.png") no-repeat center; */
        /* background-size: 100% 100%; */
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
        /* bottom: 100%; */
        /* bottom: 0; */
        /* z-index: 10px; */
    }
/* 鼠标小手 */
    .top > div:nth-child(1),
    .top > div:nth-child(2),
    .top > div:nth-child(4),
    .top > div:nth-child(5) {
        cursor: pointer;
    }
</style>