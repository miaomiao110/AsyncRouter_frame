<template>
    <div class="contariner_home">
        <div class="bg">
            <img src="@/assets/images/2.jpg" alt="Picture">
        </div>
        <div class="login_form">
            <div class="login_form_child">
                <div class="mytittle">{{mytittle}}</div>
                <!-- <input type="text"> -->
                <!-- <input id="password" name="password" class="required form-control form-control-solid placeholder-no-fix form-group" tabindex="2" placeholder="密码" onfocus="this.type='password'" accesskey="p" type="password" value="" size="25" maxlength="20" autocomplete="off" aria-required="true"> -->
                <!-- <el-input
                placeholder="请输入内容"
                v-model="input"
                clearable>
                </el-input>

                <el-input placeholder="请输入密码" v-model="input" show-password></el-input> -->

                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-row>
                    <!-- <el-col :span="2">-</el-col> -->
                    <el-col :span="10">
                        <el-form-item label="账号" prop="username">
                            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                        </el-form-item>                        
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                        </el-form-item>                        
                    </el-col>
                </el-row>


                <!-- <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm.age"></el-input>
                </el-form-item> -->
                <br>
                <el-row>
                    <el-col :span="2">-</el-col>
                    <el-col :span="14">
                        <el-checkbox label=" 记住密码" name="type"></el-checkbox>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
                            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                        </el-form-item>                        
                    </el-col>
                </el-row>

                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
import {mapState,mapActions} from "vuex"
import constRouter from "@/router/index.js"

export default {
    data(){

    var validate_username = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入用户名'));
            } else {
            // if (this.ruleForm.username !== '') {
            //     this.$refs.ruleForm.validateField('username');
            // }
            callback();
            }
        };
    var validate_password = (rule, value ,callback) => {
        if(value === "") {
            callback(new Error('请输入密码'))
        }else{
            callback();
        }
    }

        return {
            mytittle:"智慧灯杆综合管理平台",
            ruleForm:{
                username:"",
                password:"",
            },
            rules:{
                username:[{validator:validate_username,trigger:'blur'}],
                password:[{validator:validate_password,trigger:'blur'}]
            }

        }
    },
    created(){
        // alert(1)
        console.log(constRouter)
        this.setCurrentRouter(JSON.stringify(constRouter))
    },
    computed:{
        ...mapState("routerStorage",["currentRouter"])
    },
    methods:{
        ...mapActions("routerStorage",["setCurrentRouter"]),

        submitForm(){
            // alert(1)
            this.$router.push("/home")
        }
    }
}
</script>

<style scoped>
    .contariner_home {
        width:100%;
        height: 100%;
        /* overflow: hidden; */
        display: flex;
        flex-direction: row;
    }   
    .contariner_home > div {
        /* display: inline-block;
        height: 100%; */
        flex: 1 1;
    }
    .bg img {
        height: 100%;
        width: 100%;
    }
    /* .el-input__inner {
        border-width:0 0 1px 0!important;
    } */
    /* .el-input__inner {
        border-width:0 0 1px 0!important;
    } */
    .mytittle {
        margin-bottom: 40px;
        /* text-align: center; */
        padding: 50px;
        font-size: 36px;
    }
    .login_form_child {
        /* vertical-align: middle; */
        margin-top: 300px;
    }
</style>