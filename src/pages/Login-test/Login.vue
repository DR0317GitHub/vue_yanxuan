<template>
  <div class="Login">
    <div class="logo">
      <img src="../../assets/images/logo.png">
    </div>
    <div class="Login-ZH">账号登录</div>
    <div class="Login-input">
      <input placeholder="手机/邮箱/用户名"/>
      <input placeholder="密码"/>
      <input placeholder="验证码"/>
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

</style>
