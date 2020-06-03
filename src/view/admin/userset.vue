<!-- 个人设置 -->
<template>
<div>
    <div>
        <h4 style="text-align: left;font-size: 18px;font-weight: 500;margin-bottom: 24px;margin-top: 10px;">个人设置</h4>
    </div>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <div style="background: #6e8cd7;padding: 0px 20px;height:50px;"><h3 class="panel-title">个人信息</h3></div>
                <div style="margin: 20px;padding: 10px;">
                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" size='small'>
                        <el-form-item label="账号" style="font-weight: 600;">
                            <el-input v-model="account" disabled=true></el-input>
                        </el-form-item>
                        <el-form-item label="姓名" style="font-weight: 600;">
                            <el-input v-model="name"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" style="font-weight: 600;">
                            <el-input v-model="mail"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="border-color:#6e8cd7; background-color: #6e8cd7;margin-left: 350px;">保存信息</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <div style="background: #ef5350;padding: 0px 20px;height:50px;"><h3 class="panel-title">修改密码</h3></div>
                <div style="margin: 20px;padding: 10px;">
                    <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" size='small'>
                        <el-form-item label="输入旧密码" style="font-weight: 600;">
                            <el-input v-model="formLabelAlign.name"></el-input>
                        </el-form-item>
                        <el-form-item label="输入新密码" style="font-weight: 600;">
                            <el-input v-model="formLabelAlign.region"></el-input>
                        </el-form-item>
                        <el-form-item label="输入新密码" style="font-weight: 600;">
                            <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="border-color: #ef5350;background-color: #ef5350;margin-left: 350px;">修改密码</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name:'userset',
    data() {
        return {
            labelPosition: 'right',
            account:'',
            name:'',
            mail:'',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        }
    },
//生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        var userInfo = this.$store.state.userInfo   
        this.account = userInfo.account
        this.mail = userInfo.mail
        this.name = userInfo.name
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #ffffff;
    }
    .bg-purple {
        background: #ffffff;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .panel-title{
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        line-height: 50px;
        color: #fff;
    }
    .el-form-item__label{
        color: #262627;
        font-weight: 600;
    }
    .el-input__inner{
        background-color: rgb(207, 205, 205);
    }
</style>