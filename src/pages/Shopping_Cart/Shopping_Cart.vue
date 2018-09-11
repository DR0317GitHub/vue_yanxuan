<template>
  <div class="shopCart">
    <h3 class="title">购物车</h3>
    <ul class="explain">
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>30天无忧退货</span>
      </li>
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>48小时快速退款</span>
      </li>
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="cart">
      <div class="img"></div>
      <div class="txt">
        <div class="inner">
          <div class="txtCon">去添加点什么吧</div>
          <div class="txtBtn">登录</div>
        </div>
      </div>
    </div>
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
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../common/stylus/mixins.styl'
  .shopCart
    position relative
    height 100%
    background-color #eeee
    .title
      font-size 14px
      line-height 50px
      text-align center
      background #ffffff
      color #333333
    >h3
      font-size p13px
      line-height 44px
    >.explain
      z-index 1
      height 35px
      padding 0 15px
      display flex
      flex-flow row nowrap
      align-items center
      justify-content space-between
      >.expItem
        display flex
        align-items center
        font-size 12px
        color #666666
        >i
          display inline-block
          width 5px
          height 5px
          font-size 5px
          color #d9d9d9
          margin-right 4px
    .cart
      position absolute
      top -25px
      right 0
      bottom 0
      left 0
      margin auto
      height 150px
      text-align center
      >.img
        display inline-block
        width 120px
        height 120px
        margin-bottom 4px
        background url('../../assets/images/cart.png')
        background-size 100%
        background-position center
        background-repeat no-repeat
      >.txt
        font-size 14px
        line-height 1
        color #7f7f7f
        >.inner
          margin-top -10px
          >.txtCon
            margin-bottom 25px
            line-height 1
            font-size 14px
            color #999999
          >.txtBtn
            margin auto
            width 240px
            height 45px
            font-size 15px
            line-height 45px
            color #ffffff
            background-color $main
            border-radius 2px

</style>
