<template>
    <div class="application_container">
        <!-- application -->
        <!-- {{currentRouter[2].children[2].children}} -->
        <div class="item_content">
            <!-- <div class="item_row_1">
                <div></div>
                <div style="background:#638ca5"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_lighting_icon.png" alt=""></dt><dd>智慧照明</dd></dl></div>
                <div style="background:#6ad37e"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_safety_supervision_icon.png" alt=""></dt><dd>智慧安监</dd></dl></div>
                <div></div>
                <div style="background:#ffc933"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_environmental_protection_icon.png" alt=""></dt><dd>智慧照明</dd></dl></div>
            </div>
            <div class="item_row_2">
                <div style="background:#f9a050"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/wisdom_municipal_icon.png" alt=""></dt><dd>智慧照明</dd></dl></div>
                <div style="background:#6e4589"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_transportation_icon.png" alt=""></dt><dd>智慧照明</dd></dl></div>
                <div></div>
                <div style="background:#e1556f"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_life_icon.png" alt=""></dt><dd>智慧照明</dd></dl></div>
                <div></div>
            </div>
            <div class="item_row_3">
                <div></div>
                <div></div>
                <div style="background:#5a8ae1"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/wireless_city_icon.png" alt=""></dt><dd>智慧照明</dd></dl></div>
                <div></div>
                <div></div>
            </div> -->

    <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select> -->

            <div class="item_row_1">
                <div></div>
                <div style="background:#638ca5"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_lighting_icon.png" alt=""></dt><dd>{{item_nav_info[0].name}}</dd></dl></div>
                <div style="background:#6ad37e"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_safety_supervision_icon.png" alt=""></dt><dd>{{item_nav_info[1].name}}</dd></dl></div>
                <div></div>
                <div style="background:#ffc933"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_environmental_protection_icon.png" alt=""></dt><dd>{{item_nav_info[2].name}}</dd></dl></div>
            </div>
            <div class="item_row_2">
                <div style="background:#f9a050"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/wisdom_municipal_icon.png" alt=""></dt><dd>{{item_nav_info[3].name}}</dd></dl></div>
                <div style="background:#6e4589"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_transportation_icon.png" alt=""></dt><dd>{{item_nav_info[4].name}}</dd></dl></div>
                <div></div>
                <div style="background:#e1556f"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/intelligent_life_icon.png" alt=""></dt><dd>{{item_nav_info[5].name}}</dd></dl></div>
                <div></div>
            </div>
            <div class="item_row_3">
                <div></div>
                <div></div>
                <div style="background:#5a8ae1"><dl><dt><img style="width:24%;vertical-align: middle;" src="../../../assets/img/wireless_city_icon.png" alt=""></dt><dd>{{item_nav_info[6].name}}</dd></dl></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
import {routes} from "@/router/index.js"

export default {
    data(){
        return {
            currentRouter:routes,
            form:{}
        }
    },
    computed:{
        item_nav_info(){
            return this.currentRouter[2].children[2].children
        }
    }
}
</script>

<style scoped>
    .application_container {
        background: url("../../../assets/img/application_center_bg.jpg") no-repeat center;
        background-size: 100% 100%;
        height: 100%;
    }
    .item_content {
        width: 78%;
        height: 70%;
        position: absolute;
        left: 0;
        top:0;
        bottom: 0;
        right: 0;
        margin: auto;
        padding: 0;
        font-size: 1.8vh;
        /* background: lightblue; */
    }
    .item_row_1,
    .item_row_2,
    .item_row_3 {
        height: 33.3%;
        /* background: rgb(71, 52, 52); */
    }
    .item_row_1 > div,
    .item_row_2 > div,
    .item_row_3 > div {
        width: 20%;
        height: 100%;
        float: left;
        /* help item position */
        position: relative;
    }
    dt {
        text-align: center;
    }
    dd {
        margin-top: 15%;
        font-size: 125%;
        text-align: center;
        margin-left: 0;
        color: #fff;
    }
    dl {
        width: 100%;
        height: 50%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .item_row_1 > div:nth-child(4) {
        background: url("../../../assets/img/pic_01.png") no-repeat center;
        background-size: 100% 100%;
    }
    .item_row_2 > div:nth-child(3) {
        background: url("../../../assets/img/pic_02.png") no-repeat center;
        background-size: 100% 100%;
    }
    .item_row_3 > div:nth-child(2) {
        background: url("../../../assets/img/pic_03.png") no-repeat center;
        background-size: 100% 100%;
    }
    /* item hover */
    .item_row_1 > div:nth-child(2),
    .item_row_1 > div:nth-child(3),
    .item_row_1 > div:nth-child(5),
    .item_row_2 > div:nth-child(1),
    .item_row_2 > div:nth-child(2),
    .item_row_2 > div:nth-child(4),
    .item_row_3 > div:nth-child(3) {
        cursor: pointer;
    }

    .item_row_1 > div:nth-child(2):hover,
    .item_row_1 > div:nth-child(3):hover,
    .item_row_1 > div:nth-child(5):hover,
    .item_row_2 > div:nth-child(1):hover,
    .item_row_2 > div:nth-child(2):hover,
    .item_row_2 > div:nth-child(4):hover,
    .item_row_3 > div:nth-child(3):hover {
        background: #333!important;
        opacity: 0.3;
        color: #fff;

        animation: test;
        animation-duration: 1.2s;
        animation-timing-function:linear;
        animation-delay:0s;
        animation-iteration-count:1;
        animation-direction:normal;      
        animation-fill-mode:forwards;   
    }
    @keyframes test{
        0%{
            opacity: 0.3;
        }
         
        /* 25%{
            width:25px;
        } */
         
        50%{
            opacity: 0.5;
        }
         
        /* 75%{
            width:75px;
        } */
         
        100%{
            opacity: 0.7;
        }
    }




</style>