<template>
  <div class="personal">
    <!--固定头部-->
    <header class="header">
      <div class="header_input">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"
          alt="网易优选"/>
        <i class="iconfont icon-sinaweibo05 home" @click="$router.push('/home')"></i>
        <div class="seacher">
          <i class="iconfont icon-search3"></i>
          <i class="iconfont icon-tab-bar--n chart"></i>
        </div>

      </div>

    </header>
    <section class="cont">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="btns">
        <div class="btn" @click="gotoPhone('/loginphone')">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="btn dist" @click="goto('/login')">
          <i class="iconfont icon-youxiang space"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="quickLoign">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-jiantouyou"></i>
      </div>
    </section>
    <section class="otherLogin">
      <div class="itemOther">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </section>
  </div>
</template>

<script>

  export default {

    created () {
      this.resetTop()
    },
    methods: {
      resetTop () {
        window.scrollTo(0, 0)
      },
      goto(path){
        this.$router.replace(path)
      },
      gotoPhone(path){
        this.$router.replace(path)
      },
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .personal
    width 100%
    height 100%
    box-sizing border-box
    background #f2f5f4
    position relative
    padding-top 60px
    .header
      position fixed
      z-index 9
      top 0px
      left 0px
      width 100%
      height 50px
      background: #fff
      .header_input
        width 100%
        height 50px
        line-height 50px
        text-align center
        background #fafafa
        position relative
        img
          width 80px
          height 25px
          margin-top 12px
          margin-left 22px
        .home
          font-size 20px
          float left
          margin-left 20px
        .seacher
          float right
          i
            font-size 20px
            margin-right 20px


    .cont
      >.logo
        text-align center
        padding 60px 0
        >img
          width 150px
          height 52px
      >.btns
        padding 0 21px
        >.btn
          margin-bottom 20px
          text-align center
          border-radius 3px
          width 100%
          height 43px
          line-height 43px
          vertical-align middle
          text-align center
          font-size 14px
          color #ffffff
          border 1px solid $main
          background-color $main
          &.dist
            background-color #f2f5f4
            color $main
          >i
            width 20px
            height 20px
            box-sizing border-box
            font-size 20px
            vertical-align inherit
            &.space
              margin-right 5px
      >.quickLoign
        color #333333
        font-size 14px
        width 100%
        text-align center
        >i
          font-size 14px
          margin-right 8px
          margin-left 2px
          color #333333
    .otherLogin
      position absolute
      width 100%
      height 30px
      left 0
      bottom 30px
      text-align center
      .itemOther
        height 13px
        border-right 1px solid #979797
        display inline-block
        text-align center
        color #979797
        padding 0 30px
        font-size 13px
        >i
          font-size 13px
        &:last-child
          border-right none

</style>
