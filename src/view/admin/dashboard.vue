<!-- 统计概况 -->
<template>
<div style="background: white;padding: 0px 0px 20px 0px;">
    <div style="width:100%;text-align: left;background:#6e8cd7;color: #fff;padding: 10px 20px;">
        <h3 style="font-size: 15px;font-weight: 600;line-height: 20px;margin-top: .5rem;">统计概况</h3>
    </div>
    <el-row :gutter="20" style="margin-top: 30px; margin-left: 10px;margin-right: 10px;">
        <el-col :span="8">
            <div>
                <el-card class="box-card" style="background-color: #29b6f6!important;height:130px;">
                    <i class="el-icon-document-copy"></i>
                    <span class="medium">完成了 {{ msg_1 }} 篇博客</span>
                </el-card>
            </div>
        </el-col>
        <el-col :span="8">
            <div>
                <el-card class="box-card" style="background-color: #E6A23C!important;height:130px;">
                    <i class="el-icon-star-off"></i>
                    <span class="medium">收到了 {{ msg_2 }} 个评论</span>
                </el-card>
            </div>
        </el-col>
        <el-col :span="8">
            <div>
                <el-card class="box-card" style="background-color: #33b86c!important;height:130px;">
                    <i class="el-icon-view"></i>
                    <span class="medium">博客总浏览量为 {{ msg_3 }} 次</span>
                </el-card>
            </div>
        </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 30px; margin-left: 10px;margin-right: 10px;">
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <h3 class="panel-title">最新文章</h3>
                    </div>
                    <div v-for="(article,i) in articleList" :key="i" class="text item">
                        <a :href="'#/blog/'+ article.id ">{{(i+1)+'、'+article.title|formatTitle }}</a>
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple-light">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <h3 class="panel-title">最新评论</h3>
                    </div>
                    <div v-for="o in 5" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <h3 class="panel-title">浏览量Top5</h3>
                    </div>
                    <div v-for="o in 5" :key="o" class="text item">
                        {{'测试标题—— ' + o }}
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name:'dashboard',
    data() {
        return {
            articleList:[
                {title:'Android 学习笔记二 自定义按钮形状 颜色 点击渐变',id:1},
                {title:'JAVA生成数字0~9字母A~Z混合编码',id:2},
                {title:'ELK学习记录三 ：elasticsearch、logstash及kibana的安装与配置(windows)',id:3},
                {title:'Java 求n天前的时间或者n月前的时间',id:4},
                {title:'Android 学习笔记一 自定义按钮背景图',id:5}
            ],
            msg_1:'5',
            msg_2:'3',
            msg_3:'3200',
        }
    },
    methods: {
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    },
    //使用过滤器处理超长标题
    filters: {
        formatTitle (value) {
            if (!value) return ''
            if (value.length > 37) {
                return value.slice(0,37) + '...'
            }
            return value
        }
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
    .el-card__header {
        background: rgb(250, 250, 250);
    }
    .el-row {   
        margin-bottom: 20px;
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .panel-title{
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        color: #797979;
    }
    .text {
        font-size: 14px;
        text-align: left;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%
    }
</style>