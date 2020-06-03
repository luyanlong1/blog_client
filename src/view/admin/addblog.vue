<!-- 新建博客 -->
<template>
<div style="background: white;padding: 0px 0px 20px 0px;">
    <div style="width:100%;text-align: left;background:#6e8cd7;color: #fff;padding: 10px 20px;">
        <h3 style="font-size: 15px;font-weight: 600;line-height: 20px;margin-top: .5rem;">发布文章</h3>
    </div>
    <el-row :gutter="20"  style="margin-top: 20px; margin-left: 10px;margin-right: 10px;">
        <el-col :span="12">
            <div>
                <el-input
                    placeholder="请输入文章标题"
                    v-model="input"
                    clearable>
                </el-input>
            </div>
        </el-col>
        <el-col :span="12">
            <div>
                <el-tag
                    :key="index"
                    v-for="(tag,index) in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)"
                    :type="tag.type">
                    {{ tag.name }}
                </el-tag>
                <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                    >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            </div>
        </el-col>
    </el-row>
    
    <mavon-editor
        ref="md"
        placeholder="请输入文档内容..."
        :boxShadow="false"
        style="z-index:1;border: 1px solid #d9d9d9;height:50vh;margin-top:20px"
        v-model="content"
        :toolbars="toolbars"
    />
    <div style="width:100%;background: white;height:50px">
        <div style="float:left;width:50%;margin-top:20px;text-align:left">
            <span class="demonstration" style="font-size: 14px;font-weight: 600;line-height: 30px;margin-left:40px;margin-right:20px">是否公开</span>
            <el-switch
                class="switchStyle"
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="是"
                inactive-text="否">
            </el-switch>
        </div>
        <div style="float:right;width:50%;">
            <el-row style="margin-top:20px;text-align: right;margin-right:40px">
                <el-button type="primary" icon="el-icon-edit">存为草稿</el-button>
                <el-button type="success" icon="el-icon-check">发布文章</el-button>
            </el-row>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'addblog',
    data() {
        return {
            content: "",
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: false, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true // 预览
            },
            dynamicTags: [
                { name: 'oracle', type: '' },
                { name: 'ELK', type: 'success' },
                { name: 'SpringBoot', type: 'warning' }
                ],
            inputVisible: false,
            inputValue: '',
            input:'',
            value: true
        }
    },
    methods: {
        save(){
            console.log(this.content);
        },
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
            this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style>
/* @import url(); 引入css类 */
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
    /* 下面为选择开关自定义 */
    .switchStyle .el-switch__label {
        position: absolute;
        display: none;
        color: #fff;
    }
    .switchStyle .el-switch__label--left {
        z-index: 9;
        left: 25px;
    }
    .switchStyle .el-switch__label--right {
        z-index: 9;
    }
    .switchStyle .el-switch__label.is-active {
        display: block;
    }
    .switchStyle.el-switch .el-switch__core,
    .el-switch .el-switch__label {
        width: 50px !important;
    }
</style>