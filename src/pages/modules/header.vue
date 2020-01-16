<template>
    <div class="header_container">
        <div class="nav_top">
            <div class="logo">
                <img style="height:30px;" src="@/assets/img/logo_icon.png" alt="">
            </div>
            <div class="menu">
                <a>首页</a>
                <a>监控中心</a>
                <a>应用中心</a>
                <a>运维管理<i class="el-icon-arrow-down"></i></a>
                <a>联动控制<i class="el-icon-arrow-down"></i></a>
                <!-- <a>系统管理<i class="el-icon-arrow-down"></i></a> -->
                <a>
                    <el-dropdown>
                    <span class="el-dropdown-link" style="color:#c6cfda;font-size:16px;">
                        系统管理<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item> 用户管理 </el-dropdown-item>
                        <el-dropdown-item> 角色管理 </el-dropdown-item>
                        <el-dropdown-item> 系统日志 </el-dropdown-item>
                        <el-dropdown-item> 系统设置 </el-dropdown-item>
                        <el-dropdown-item> 定时任务 </el-dropdown-item>
                        <el-dropdown-item> 移动设备授权 </el-dropdown-item>
                        <el-dropdown-item> 系统配置管理 </el-dropdown-item>
                        <el-dropdown-item> 帮助 </el-dropdown-item>

                    </el-dropdown-menu>
                    </el-dropdown>

                    <!-- <div class="block"> -->
                    <!-- <span class="demonstration">hover 触发子菜单</span> -->
                    <!-- <el-cascader-panel :options="options"></el-cascader-panel> -->
                    <!-- </div> -->
                </a>
                <a>运维中心</a>
            </div>
            <div class="message">
                <a><el-badge :value="12" :max="99" class="item" type="primary"><i class="el-icon-message-solid"></i></el-badge></a>
                <a><el-badge :value="23" :max="99" class="item" type="danger"><i class="el-icon-warning"></i></el-badge></a>
                <a><el-badge :value="200" :max="99" class="item" type="warning"><i class="el-icon-user-solid"></i></el-badge></a>
            </div>
            <div class="info">
                <!-- <a>Jarry&nbsp;&nbsp;<i class="el-icon-arrow-down"></i></a>
                <div class="info_menu"> -->
                    <!-- <a href=""></a> -->
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
                <!-- </div> -->
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            options:[{
                value: 'zhinan',
                label: '指南',
            },{
                value: 'daohang',
                label: '导航',
            }]
        }
    }
}
</script>

<style scoped>
    .nav_top {
        height: 50px;
        background: #2b3643;
    }
    .nav_top > div {
        position: absolute;
        top: 0;
    }
    .logo {
        left: 0;
        padding: 10px;
        cursor: pointer;
    }
    .menu {
        color: #c6cfda;
        height: 50px;
        left: 300px;
        line-height: 50px;
    }
    .menu > a {
        list-style: none;
        display: inline-block;
        height: 50px;
        margin-right: 20px;
        cursor: pointer;
        padding: 0 10px;
    }
    .message {
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
    .info {
        right: 20px;
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
/* hover color */
    .menu a:hover {
        background: #55585f;
    }
    .message i:hover {
        color: #fff;
    }
    .info a:hover {
        background: #55585f;
    }
</style>