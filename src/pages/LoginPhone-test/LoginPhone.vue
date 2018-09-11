<template>
  <div class="Login">
    <div class="logo">
      <img src="../../assets/images/logo.png">
    </div>
    <div class="Login-ZH">手机号登录</div>
    <div class="Login-input">
      <input type="text" maxlength="11" placeholder="手机号" v-model="phone"/>
      <input type="text" maxlength="8"  placeholder="验证码" v-model="code"/>
      <div class="login_hint">
        温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
        <a href="javascript:;">《用户服务协议》</a>
      </div>
      <button>
        登录
      </button>
      <div class="Login-My">
        <a href="javascript:;">关于我们</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        phone:'',
        code:''
      }
    },
    methods:{
      Onalert(){
        MessageBox('提示', '操作成功');
      }
    },
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .logo
    text-align center
    padding 60px 0
    img
      width 150px
      height 52px

  .Login-ZH
    color #b4282d
    font-size 18px
    font-weight bold
    margin-bottom 10px
  .Login-input
    input
      width 250px
      height 50px
      border 1px solid #eeeeee
      margin 10px
      padding-left 30px
      outline:none
    button
      display block
      width 280px
      height 50px
      margin-left 50px
      color #fff
      background: #b4282d
      font-size 18px
      margin-bottom 20px
    .Login-My
      a
        color #999
    .login_hint
      font-size 12px
      width 280px
      height 50px
      padding-left 50px
      margin 10px
      line-height 20px
      color #999
      a
        color #b4282d

</style>
