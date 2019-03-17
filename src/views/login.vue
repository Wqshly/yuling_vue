<template>
  <div class="fill-contain">
    <transition name="form-fade" mode="in-out">
      <div class="form-container">
        <section class="login-form">
          <div class="title">
            <p>系&nbsp&nbsp统&nbsp&nbsp登&nbsp&nbsp录</p>
          </div>
          <el-form style="padding-top: 50px">
            <el-form-item>
              <el-input
                placeholder="请输入用户名"
                prefix-icon="el-icon-wqs-shezhi-zhanghaoguanli"
                clearable/>
            </el-form-item>
            <el-form-item style="margin-bottom: 10px">
              <el-input
                @keyup.enter=""
                placeholder="请输入密码"
                prefix-icon="el-icon-wqs-suoding"
                clearable/>
            </el-form-item>
            <el-form-item style="margin-bottom: 5px;">
              <el-checkbox style="float: right;margin-right: 20px" v-model="checked">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button style="float: left;width: 100px;" @click="submitForm">登录</el-button>
              <el-button style="float: right;width: 100px;">注册</el-button>
            </el-form-item>
          </el-form>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "login",
    methods: {
      submitForm: function () {
        this.$router.push('manage');
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../style/style";

  .form-container {
    .global_centre(450px, 360px);
    //.transform_global_centre;
    .width_and_height(450px, 360px);
    /*padding: 25px;*/
    border: 1px solid #eaeaea;
    box-shadow: 0px 0px 25px #cac6c6;
    border-radius: 10px;
    text-align: center;
    background-color: #fff;
  }

  .login-form {
    padding: 20px;
    margin: 20px;
  }

  .title {
    font-size: 28px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
</style>
