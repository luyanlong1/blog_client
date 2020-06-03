<!-- 博客列表 -->
<template>
<div>
    <div style="width:100%;text-align: left;background:#6e8cd7;color: #fff;padding: 10px 20px;">
        <h3 style="font-size: 15px;font-weight: 600;line-height: 20px;margin-top: .5rem;">已发布</h3>
    </div>
    <el-table :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
        <el-table-column  label="标题" prop="title" width="300px"></el-table-column>
        <el-table-column label="作者" prop="author" width="200px"></el-table-column>
        <el-table-column  label="发布日期" prop="createTime" width="300px" align="center"  :formatter="formatterDate"></el-table-column>
        <el-table-column  label="是否公开" prop="isPublic" width="200px" align="center">
            <template slot-scope="scope">
                <el-tag :type="scope.row.isPublic === '0' ? 'success' : 'danger' " disable-transitions size='medium'
                >{{scope.row.isPublic === '0' ? '是' : '否'}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column  align="right">
            <template slot="header" slot-scope="scope">
                <el-input  v-model="search" size="mini" placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button icon="el-icon-edit" size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button icon="el-icon-delete" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" style="margin-right:10px">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="block" style="background: white;padding: 10px 10px;">
        <el-pagination
            layout="prev, pager, next, total"
            :total="parseInt(count)"
            :page-size="parseInt(pageSize)"
            @prev-click="preClick"
            @next-click="nextClick"
            @current-change="currentChange">
        </el-pagination>
    </div>
</div>
</template>

<script>
import config from '@/assets/tools/config.json'
import axios from 'axios'
export default {
    name:"bloglist",
    data() {
        return {
            tableData: [],
            search: '',
            serverUrl:'',
            pageNo:1,
            pageSize:8,
            count:''
        };
    },
    methods:{
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        getBlogs: function (pageNo) {
            console.log("getBlogs");
            var this_ = this;
            var param = {"pageNo":pageNo,"pageSize":this_.pageSize,"state":"1"};
            axios.post(this.serverUrl+"/show/query",param).then(function (response) {
                this_.tableData = response.data.list;
                this_.count = response.data.count;
            })
        },
        preClick: function(cpage){
            this.getBlogs(cpage);
        },
        nextClick: function(cpage){
            this.getBlogs(cpage);
        },
        currentChange: function(cpage){
            this.getBlogs(cpage);
        },
        formatterDate:function(row, column) { 
            var date = row[column.property];
            if (date === undefined) {
                return "";
            }
            return date.slice(0, 10);
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        this.serverUrl =  "http://" + config.adminserver.address + ":" + config.adminserver.port;
        this.getBlogs(this.pageNo);
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>