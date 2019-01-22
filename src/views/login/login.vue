<template>
  <div class="login-container">

    <el-form ref="loginForm" :model="loginForm"  class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">{{ login.title}}</h3>
      </div>

      <el-form-item >
        <el-input
          v-model="loginForm.username"
          :placeholder="login.username"
          name="username"
          type="text"
        />
        {{loginForm.username}}
      </el-form-item>

      <el-form-item >

        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          :placeholder="login.password"
          name="password"
          />{{loginForm.password}}
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">{{ login.login }}</el-button>
    </el-form>

  </div>
</template>
<script>
import {Message} from 'element-ui'
export default{
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '1111111'
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined,
      login: {
        title: '登录系统',
        login: '登录',
        username: '',
        password: '',
        any: '',
        thirdparty: '',
        thirdpartyTips: ''
      }
    }
  },
  created () {
    //  var obj = this.$api;
    //   for (var temp in obj){
    //       console.log(temp+":"+obj[temp])
    //   }
  },
  destroyed () {

  },
  methods: {
    showPwd () {

    },
    handleLogin () {
      // form 格式上传，后端接受不到
      // let fd = new FormData();
      // fd.append('username', this.loginForm.username);
      // fd.append('password', this.loginForm.password);

      var temp = 'username=' + this.loginForm.username + '&password=' + this.loginForm.password
      this.$api.post('/chatting/j_spring_security_check', temp)
        .then(r => {
          if (r == null) {

          } else {
            this.$router.push('/admin/index')
          }
        // for( var a in r)
          // console.log("key:"+a+'value:'+r[a])
        // console.log(r.status)
          // if(r.status == 'true'){
          //   this.$router.push('/admin/index')
          // }
          // else {
          //     Message({
          //       message: '登录失败',
          //       type: 'warning',
          //       duration: 3 * 1000
          //     })
          // }
        })
        .catch(error => {
          Message({
            message: error,
            type: 'warning',
            duration: 3 * 1000
          })
        })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>
