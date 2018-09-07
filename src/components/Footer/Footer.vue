<template>
  <footer class="footer">
    <nav>
      <a href="javascript:; " class="item" @click="goto('/home')" :class="{active: isCurrent('/home')}">
        <i class="iconfont icon-sinaweibo05"></i>
        <span>首页</span>
      </a>
      <a href="javascript:; "  class="item"  @click="goto('/general')" :class="{active: isCurrent('/general')}">
        <i class="iconfont icon-hui"></i>
        <span>识物</span>
      </a>
      <a href="javascript:; "  class="item"  @click="goto('/list')" :class="{active: isCurrent('/list')}">
        <i class="iconfont icon-chouti"></i>
        <span>分类</span>
      </a>
      <a href="javascript:; "  class="item"  @click="goto('/shopping_cart')" :class="{active: isCurrent('/shopping_cart')}">
        <i class="iconfont icon-tab-bar--n"></i>
        <span>购物车</span>
      </a>
      <a href="javascript:; "  class="item"  @click="goto('/personal')" :class="{active: isCurrent('/personal')}">
        <i class="iconfont icon-nanrentouxiang"></i>
        <span>个人</span>
      </a>
    </nav>
  </footer>
</template>
<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      },
      isCurrent(path){
      return this.$route.path===path
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer
    position fixed
    bottom 0
    left 0
    right 0
    z-index 6
    padding 5px
    border-top 1px solid #fafafa
    background: #fafafa
    nav
      display flex
      justify-content space-around
      .item
        color #666
        &.active
         color #b4282d
        .iconfont
          display block
          font-size 20px
          margin-bottom 2px
        span
          font-size 13px





</style>
