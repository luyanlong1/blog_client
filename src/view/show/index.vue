<!-- 首页 -->
<template>
<div class="container">
    <div class="row" style="margin-top: 20px;">
        <div class="col-12">
            <h2>
                Springboot - ES - blog
            </h2>
        </div>
    </div>

    <div class="row" style="margin-top: 20px;" id="app">
        <div class="col-9">
            <form class="form-inline">
                <div class="form-group mb-2">
                    <input type="text" class="form-control" id="title-mysql" placeholder="检索你的检索" v-model="keyword">
                </div>
                <button type="button" class="btn btn-primary mb-2" style="margin-left: 5px;" v-on:click="searchWithMysql">mysql</button>
                <button type="button" class="btn btn-primary mb-2" style="margin-left: 5px;" v-on:click="searchWithEs">ES</button>
                <span style="margin-left: 10px; color: green;">耗时：{{duration}}</span>
            </form>
            <div class="row" >
                <div class="col-sm-6" v-for="(blog,index) in blogList" :key="blog.id"  style="margin-top: 20px;">
                    <div class="card">
                        <div class="card-img-top">
                            <img :src="'/static/img/'+(index+1)+'.jpg'" style="height: auto;width: 100%"/>
                        </div>  
                        <div class="card-body">
                            <h5 class="card-title">{{blog.title}}</h5>
                            <p>{{blog.author}} 发布于 {{blog.createTime}}</p>
                            <a href="#" style="font-weight: bold" @click="goBlog(blog.id)">...more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-3">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Springboot</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">ES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">杂谈</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">笔记</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import config from '@/assets/tools/config.json'
import axios from 'axios'

export default {
    name:'index',
    data() {
        return {
            blogList:[],
            keyword:'',
            duration:'',
            serverUrl:''
        }
    },
    methods:{
        getBlogs:function () {
            console.log("getBlogs");
            var that = this;
            axios.get( that.serverUrl + "/show/blogs",{}).then(function (response) {
                that.blogList = response.data;
            })
        },
        searchWithMysql:function () {
            console.log("searchWithMysql");
            var that = this;
            var param = {"type":"mysql","keyword":that.keyword};
            axios.post(this.serverUrl+"/show/search",param).then(function (response) {
                that.blogList = response.data.list;
                that.duration = response.data.duration;
            })
        },
        searchWithEs:function () {
            console.log("searchWithEs");
            var that = this;
            var param = {"type":"es","keyword":that.keyword};
            axios.post(this.serverUrl+"/show/search",param).then(function (response) {
                that.blogList = response.data.list;
                that.duration = response.data.duration;
            })
        },
        goBlog:function(id){
            this.$router.push({
				path: '/blog/'+id,
			});
        }    
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        this.serverUrl =  "http://" + config.adminserver.address + ":" + config.adminserver.port;
        this.getBlogs();
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>