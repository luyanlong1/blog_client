<!-- 博客详情页 -->
<template>
<div style="width:100%">
    <div class="row" style="margin-top: 20px;">
        <div class="col-12">
            <h2>
                Springboot - ES - blog
            </h2>
        </div>
    </div>

    <div class="row" style="margin-top: 20px;width:80%;margin-left:200px" id="app">
        <div class="col-9">
            <div style="text-align: left;margin-left: 80px;" >
                <h1 style="color:#222;font-weight: 400;font-size: 21px;">
                    <a class="a_hover" href="" >{{title}}</a>
                </h1>
                <div style="font-size: 12px;color: #5f5f5f;">
                    <span>作者：{{author}} | 发布时间：{{createTime}}</span>
                </div>
            </div>
            <div style="width: 100%;height: auto;margin-left: 80px;margin-top:20px">
                <p style="border-bottom: 1px solid #e0e0e0;padding: 5px 0 0px;"></p>
                <mavon-editor
                    :value="content"
                    defaultOpen="preview"
                    :boxShadow="false"
                    :editable="false"
                    :subfield="false"
                    :toolbarsFlag="false"
                >
                </mavon-editor>
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

    <div id="11" class="comment-container">
        <div id="comments" class="clearfix">
            <span class="response"> Hi，<a href="" class="a_hover">luyanlong</a>
            是否 <a href="/logout" title="注销" style="color:red;">注销</a> ? </span>

            <form method="post" id="comment-form" class="comment-form" onsubmit="return TaleComment.subComment();">
                <textarea name="content" id="textarea" class="form-control" placeholder="请留下您的评价，谢谢！" required="" minlength="5" maxlength="2000"></textarea>
                <input type="hidden" name="_token" value="JDJhJDEyJEJFYnhzUDFHZHBtQlpxMnpEZ1dxMi5XV0ZwT0dxTWNmZFNSVFdzTlp6ZUtsTzlBeVQ1Skph">
                <el-button round style="margin-top:10px;">提交</el-button>
            </form>
        </div>
    </div>

    <footer id="footer" class="footer bg-white">
        <p style="border-bottom: 1px solid #e0e0e0;"></p>
        <div class="footer-meta">
            <div class="footer-container">
                <div class="meta-item meta-copyright">
                    <div class="meta-copyright-info">
                        <div class="info-text">
                            <p>Powered by <a>Lyl</a>
                            </p>
                            <p>© 2020 <a href="https://github.com/biezhi">luyanlong</a></p>
                        </div>
                    </div>
                </div>
                <div class="meta-item meta-posts">
                    <h3 class="meta-title">最新文章</h3>
                    <li>
                        <a href="">Oracle数据库常用命令记录二</a>
                    </li>
                    <li>
                        <a href="">Oracle数据库常用命令记录一</a>
                    </li>
                    <li>
                        <a href="">Android 学习笔记二 自定义按钮形状 颜色 点击渐变</a>
                    </li>
                    <li>
                        <a href="">Android 学习笔记一 自定义按钮背景图</a>
                    </li>
                    <li>
                        <a href="">JAVA-数字+字母混合编码</a>
                    </li>
                </div>
                <div class="meta-item meta-comments">
                    <h3 class="meta-title">最新评论</h3>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
import config from '@/assets/tools/config.json'
import axios from 'axios'
export default {
    name:'blog',
    data() {
        return {
            title: '',
            author: '',
            createTime: '',
            content: '',
            serverUrl:'',
            id:'',
        }
    },
    methods: {
        blog: function () {
            console.log("blog");
            var that = this;
            axios.get( that.serverUrl + '/show/blog/'+that.id, {}).then(function (response) {
                that.title = response.data.title;
                that.author = response.data.author;
                that.createTime = response.data.createTime;
                that.content = response.data.content;
            })
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        this.id = this.$route.params.id
        this.serverUrl =  "http://" + config.adminserver.address + ":" + config.adminserver.port;
        this.blog();
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
    .a_hover:hover{
        color: #f00;
    }
    .a_hover{
        text-decoration: none;
        color: #313131;
        outline: 0;
    }
    .footer {
        position: relative;
        z-index: 1;
        margin-top: 0;
        padding-bottom: 50px;
        background-color: #fff;
    }
    .bg-white {
        background-color: #fff!important;
    }
    .footer-meta {
        padding: 50px 0 0;
        list-style: none;
    }
    .footer-meta .footer-container {
        width: 100%;
        max-width: 960px;
        height: 250px;
        margin: 0 auto;
        padding: 0 80px;
    }
    .footer-meta .meta-item {
        position: relative;
        float: left;
        width: 33.3333333%;
        min-height: 1px;
        padding: 0 30px;
    }
    .footer-meta .meta-title {
        font-size: 14px;
        padding: 0 0 10px 0;
        text-decoration: none;
        color: #5f5f5f;
    }
    .footer-meta .meta-posts li {
        font-size: 13px;
        line-height: 25px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #767676;
    }
    .footer-meta .meta-posts li a {
        color: #5f5f5f;
    }
    .comment-container {
        position: relative;
        z-index: 1;
        color: #5f5f5f;
        background-color: #f7f7f7;
        margin-top: 50px;
        height: 100%;
    }
    #comments {
        max-width: 700px;
        margin: 0 auto;
        padding: 0 20px;
    }
    .clearfix {
        zoom: 1;
    }
    #comments .response {
        font-size: 14px;
        font-weight: 400;
        display: block;
        padding: 30px 0 30px 20px;
        color: #5f5f5f;
        text-align: left;
    }
    .comment-form {
        position: relative;
        margin: 0 0 40px;
        padding: 10px 20px;
        border-radius: 3px;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);
        box-shadow: 0 1px 4px rgba(0,0,0,.04);
    }
    form {
        display: block;
        margin-top: 0em;
    }
    .footer-meta .meta-copyright .info-text p {
        font-size: 13px;
        line-height: 20px;
        margin: 0;
        color: #767676;
    }
</style>