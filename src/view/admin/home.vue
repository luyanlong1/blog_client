<!-- 后台管理 -->
<template>
<div style="background-color: #F5F5F5;">
    <el-container style="height: 700px; border: 1px solid #eee;">
        <el-aside class="">
            <div style="height:70px;background-color:#F5F5F5">
                <div style="float:left!important;text-align: center;">
                    <el-image
                        style="width: 60px; height: 60px"
                        src="/static/img/logo.png"
                        fit="fill"></el-image>
                </div>
                <div style="float: left!important;padding-top: 10px!important;">
                    <span style="font-size: 28px; color: #2f353f; line-height: 50px;">{{ title }}</span>
                </div>
            </div>
            <el-menu default-active="1" class="el-menu-vertical-demo"  @open="handleOpen"  @close="handleClose"  :collapse="isCollapse" 
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">统计概况</span>
                </el-menu-item>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-document"></i> <span slot="title">文章管理</span></template>
                    <el-menu-item-group>
                        <el-menu-item index="21">发布文章</el-menu-item>  
                        <el-menu-item index="22">已发布</el-menu-item>
                        <el-menu-item index="23">草稿箱</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="3">
                    <i class="el-icon-location"></i>
                    <span slot="title">资源维护</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">页面设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        
        <el-container>
            <el-header style="text-align: right; font-size: 16px;height:70px;">
            <div class="pull-left">
                <button @click="toCollapse" class="button-menu-mobile open-left">
                    <i class="el-icon-s-operation"></i>
                </button>
            </div>
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link" style="margin-right: 100px">Hello ·  <a href='#/home'>{{ account }}</a></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="preview"><i class="el-icon-view" style="margin-right: 5px"></i>预览站点</el-dropdown-item>
                    <el-dropdown-item command="user"><i class="el-icon-setting" style="margin-right: 5px"></i>个人设置</el-dropdown-item>
                    <el-dropdown-item command="quit"><i class="el-icon-delete" style="margin-right: 5px"></i>注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            </el-header>
            
            <el-main>
                <!-- 统计概况模块 -->
                <dashboard v-if="sonPageId === 1"></dashboard>
                <!-- 个人设置模块 -->
                <userset v-if="sonPageId === 9"></userset>
                <!-- 新建文章模块 -->
                <addblog v-if="sonPageId === 21"></addblog>
                <!-- 博客列表模块 -->
                <bolglist v-if="sonPageId === 22"></bolglist>
                <!-- 草稿列表模块 -->
                <draftlist v-if="sonPageId === 23"></draftlist>
            </el-main>
        </el-container>
    </el-container>
    <div style="background-color: #fff;height:50px;line-height:50px;">2020 © <a href='#'>lyl.</a></div>
</div>
</template>

<script>
import bolglist from './bolglist.vue'
import userset from './userset.vue'
import dashboard from './dashboard.vue'
import addblog from './addblog.vue'
import draftlist from './draftlist.vue'

export default {
    name:'home',
    components: {
        bolglist,
        userset,
        dashboard,
        addblog,
        draftlist
    },
    data() {
        return {
            isCollapse: false,
            title:'ES Blog',
            account:'',
            sonPageId:1
        };
    },
    methods: {
        init() {
            var userInfo = this.$store.state.userInfo
            //如果用户在没有登录的情况下直接访问办事页面，则跳转到登录页
            if ("{}" == JSON.stringify(userInfo)) {
                //跳转登陆页面的时候先保存回调地址vuex
                // this.$store.commit('setGotoPath', '/home/' + this.itemId)
                this.$router.push({
                    path: "/login"
                });
                return;
            }else{
                this.account = userInfo.account
            }
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        toCollapse(){
            if(this.isCollapse){
                this.title='Lyl Blog'
                this.isCollapse=false
            }else{
                this.title=''
                this.isCollapse=true
            }
        },
        handleCommand(command) {
            console.log('click on item ' + command);
            if ("preview" == command){
                this.$router.push({
                    path: "/"
                });
            }else if ("user" == command){
                this.sonPageId = 9;
            }else if ("quit" == command){

            }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            this.sonPageId = parseInt(key);
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        // this.init()
    }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
    .el-header {
        background-color: #fff;
        color: #333;
        line-height: 60px;
    }
    
    .el-aside {
        color: #333;
        width: auto!important;
    }
    .pull-left {
        float: left!important;
    }
    .button-menu-mobile {
        background: transparent;
        border: none;
        color: #888;
        font-size: 21px;
        line-height: 70px;
        padding: 0 15px;
        outline:none;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 250px;
        min-height: 628px;
    }
    .el-menu--collapse{
        min-height: 628px;
    }
    .el-dropdown-link {
    cursor: pointer;
  }
</style>