<template>
    <div class="header_container">
        <!-- {{display_router_nav}} -->
            <div class="nav_top1">
                <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#2b3643"
                text-color="#c6cfda"
                active-text-color="#ffd04b"
                router>
                <el-menu-item index="/home">
                    <template slot="title">
                        <img style="height:30px;" src="@/assets/img/logo_icon.png" alt="">
                    </template>
                </el-menu-item>
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="3">监控中心</el-menu-item>
                <el-menu-item index="4">应用中心</el-menu-item>
                <!-- <el-submenu index="1">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu> -->
                <el-submenu index="5">
                    <template slot="title">运维管理</template>
                    <el-menu-item index="5-1">设备状态监控</el-menu-item>
                    <el-menu-item index="5-2">照明设备告警监控</el-menu-item>
                    <el-menu-item index="5-3">基础设备告警监控</el-menu-item>
                    <el-menu-item index="5-4">设备概览</el-menu-item>
                    <el-menu-item index="5-5">设备操作日志</el-menu-item>
                    <el-menu-item index="5-6">消息通知</el-menu-item>
                    <el-menu-item index="5-7">服务监控</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">联动控制</template>
                    <el-menu-item index="6-1">统计概览</el-menu-item>
                    <el-menu-item index="6-2">监控项管理</el-menu-item>
                    <el-menu-item index="6-3">联动策略管理</el-menu-item>
                    <el-menu-item index="6-4">联动日志</el-menu-item>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">系统管理</template>
                    <el-submenu index="7-1">
                        <template slot="title">用户管理</template>
                        <el-menu-item index="7-1-1">用户管理</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="7-2">角色管理</el-menu-item>
                    <el-menu-item index="7-3">系统日志</el-menu-item>
                    <el-submenu index="7-4">
                        <template slot="title">系统设置</template>
                        <!-- <el-menu-item index="7-4-1">菜单管理</el-menu-item> -->
                        <el-menu-item index="/header1/setting/sys_set/menu_set">菜单管理</el-menu-item>
                        <el-menu-item index="7-4-2">字典管理</el-menu-item>
                        <el-menu-item index="7-4-3">热力区间设置</el-menu-item>
                        <el-menu-item index="7-4-4">结构树重命名</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="7-5">定时任务</el-menu-item>
                    <el-menu-item index="7-6">移动设备授权</el-menu-item>
                    <el-menu-item index="7-7">系统配置管理</el-menu-item>
                    <el-menu-item index="7-8">帮助</el-menu-item>
                </el-submenu>
                <el-menu-item index="8">运维中心</el-menu-item>
                <el-menu-item index="9">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-menu-item>
                </el-menu>
                <!-- right nav / message icon -->
                <div class="message">
                    <a><el-badge :value="12" :max="99" class="item" type="primary"><i class="el-icon-message-solid"></i></el-badge></a>
                    <a><el-badge :value="23" :max="99" class="item" type="danger"><i class="el-icon-warning"></i></el-badge></a>
                    <a><el-badge :value="200" :max="99" class="item" type="warning"><i class="el-icon-user-solid"></i></el-badge></a>
                </div>
                <!-- right nav / userinfo -->
                <div class="info">
                    <el-dropdown>
                    <span class="el-dropdown-link" style="color:#fff;">
                        Jarry<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><i class="el-icon-user"></i> 个人信息</el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-setting"></i> 修改密码</el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-circle-close"></i> 退出</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <!-- async router nav !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-->
            <div class="nav_top">
                <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#2b3643"
                text-color="#c6cfda"
                active-text-color="#ffd04b"
                router>
                <el-menu-item index="/home">
                    <template slot="title">
                        <img style="height:30px;" src="@/assets/img/logo_icon.png" alt="">
                    </template>
                </el-menu-item>
                <template v-for="item in display_router_nav.children">
                    <!-- {{item}} ||||||||| -->
                    <el-submenu v-if="item.children&&item.children.length" :key="item.path" :index="'/header1/'+item.path">
                        <template slot="title">{{item.name}}+{{item.path}}</template>
                        <!-- <el-menu-item :index="item.path">统计概览</el-menu-item> -->
                        <!-- inner nav start -->
                        <template v-for="inner_item in item.children">
                            <el-submenu v-if="inner_item.children&&inner_item.children.length" :key="inner_item.path" :index="'/header1/'+item.path+'/'+inner_item.path">
                                <template slot="title">{{inner_item.name}}+{{inner_item.path}}</template>
                                <!--  -->
                                <el-menu-item v-for="inner_inner_item in inner_item.children" :key="inner_inner_item.path" :index="'/header1/'+item.path+'/'+inner_item.path+'/'+inner_inner_item.path">{{inner_inner_item.name}}+{{inner_inner_item.path}}</el-menu-item>
                                <!--  -->
                            </el-submenu>
                            <el-menu-item v-else :key="inner_item.path" :index="'/header1/'+item.path+'/'+inner_item.path">{{inner_item.name}}+{{inner_item.path}}</el-menu-item>
                        </template>
                        <!-- inner nav end -->
                    </el-submenu>
                    <el-menu-item v-else :key="item.path" :index="'/header1/'+item.path">{{item.name}}+{{item.path}}</el-menu-item>
                </template>
                </el-menu>
                <!-- right nav / message icon -->
                <div class="message">
                    <a><el-badge :value="12" :max="99" class="item" type="primary"><i class="el-icon-message-solid"></i></el-badge></a>
                    <a><el-badge :value="23" :max="99" class="item" type="danger"><i class="el-icon-warning"></i></el-badge></a>
                    <a><el-badge :value="200" :max="99" class="item" type="warning"><i class="el-icon-user-solid"></i></el-badge></a>
                </div>
                <!-- right nav / userinfo -->
                <div class="info">
                    <el-dropdown>
                    <span class="el-dropdown-link" style="color:#fff;">
                        Jarry<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><i class="el-icon-user"></i> 个人信息</el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-setting"></i> 修改密码</el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-circle-close"></i> 退出</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>

            <div class="neirong-content">
                <router-view></router-view>
            </div>
        
    </div>
</template>

<script>
import {routes} from "@/router/index.js"
// import {mapState} from "vuex"


export default {
    data(){
        return {
            activeIndex: '1',
            activeIndex2: '1',
            current_router:routes,
            
        }
    },
    computed:{
        // ...mapState("routerStorage",["currentRouter"]),
        display_router_nav(){
            return this.current_router[2]
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
    /* &nbsp; width */
    /* .white-space {
        white-space:pre-line;
    } */
    /* 容器撑满 */
    .header_container {
        min-width: 1800px;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .neirong-content {
        /* height: 100%; */
        flex: 1;
        /* overflow: hidden; */
    }
    .nav_top {
        /* height: 50px; */  /* 好像加不加都没什么影响 */
    }
    /* message icon setting style */
    .message {
        position: absolute;
        top: 14px!important;
        right: 150px;
        box-sizing: border-box;
        height: 50px;
    }
    .message i {
        font-size: 28px;
        color:#79869a;
        margin-left: 20px;
        line-height: 50px;
        position: relative;
        top: -10px;
        cursor: pointer;
    }
    .message a{
        list-style: none;
        display: inline-block;
        height: 50px;
        box-sizing: border-box;
    }
    .message i:hover {
        color: #fff;
    }
    /* info drapdown setting */
    .info {
        position: absolute;
        top: 0;
        right: 20px;
        font-size: 24px; /* 好像没有作用 */
        color: #c6cfda;
        line-height: 50px;
    }
    .info a {
        list-style:none;
        cursor: pointer;
        display: inline-block;
        height: 50px;
        padding: 0 10px;
    }
    .info a:hover {
        background: #55585f;
    }
    /* ceshi async router nav */
    .nav_top1{
        display: none;
    }
</style>