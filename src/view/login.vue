<!-- 登陆页面 -->
<template>
  <div class='main'>
    <el-card class="box-card">
        <div style="margin-top: 40px">
            <el-input
                    prefix-icon="el-icon-user"
                    placeholder="请输入账号"
                    v-model="account"
                    clearable>
            </el-input>
            <div style="margin: 30px 0;"></div>
            <el-input
                    prefix-icon="el-icon-key"
                    placeholder="请输入密码"
                    v-model="password"
                    show-password>
            </el-input>
            <div style="margin: 30px 0;"></div>
            <el-button type="info" round class="login_button" v-on:click="userLogin">登录</el-button>
        </div>
    </el-card>
    </div>
</template>

<script>
import config from '@/assets/tools/config.json'
import axios from 'axios'

export default {
    name:'login',
    data() {
        return {
            account: '',
            password:'',
            msg:'',
            code:'',
            type:'',
            serverUrl:'',
            userInfo:{}
        };
    },
    methods:{
        openTip:function() {
            this.$message({
                showClose: true,
                message: this.msg,
                type: this.type,
            });
        },
        userLogin:function () {
            var this_ = this;
            var param = {"account":this_.account,"passWord":this_.password};
            var url = this_.serverUrl + "/user/userLogin"
            axios.post(url,param).then(function (response) {
                this_.msg = response.data.msg;
                this_.code = response.data.code;
                this_.userInfo = response.data.userInfo;
                if ("200" == this_.code){
                    this_.type = 'success'
                    console.log(this_.userInfo)
                     //登录成功之后保存用户ID  用户信息
                    this_.$store.commit('setUser', this_.userInfo.id)
                    this_.$store.commit('setUserInfo', this_.userInfo)
                    this_.openTip();
                    setTimeout(() => {
                        this_.$router.push({
                            path: '/home'
                        })
                    }, 1000)
                }else {
                    this_.type = 'error'
                    this_.openTip();
                }
            })
        },
        init(){
            debugger
            //如果已经登陆了  则直接跳转
            var userInfo = this.$store.state.userInfo
            if("{}" != JSON.stringify(userInfo)){
                this.$router.push({
                    path: '/home'
                })
            }
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        this.serverUrl =  "http://" + config.adminserver.address + ":" + config.adminserver.port;
        this.init()
    }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
    .main {
        height: 910px;
        background: url('/static/img/bg-1.jpg') no-repeat;
    }
    .box-card {
        position: absolute;
        margin-top: 250px;
        margin-left: 35%;
        width: 480px;
        background-color: rgba(241, 239, 239, 0.4);
    }
    .el-card__body{
        height: 250px;
    }
    .el-input__inner{
        background-color: transparent!important;
    }
    .login_button{
        width: 100%;
    }
</style>