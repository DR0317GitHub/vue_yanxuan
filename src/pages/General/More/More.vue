<template>
  <div class="More">
    <div class="More-title">
      <span>更多精彩</span>
      <div class="More-title-line"></div>
    </div>
    <div class="More-content" v-for="(item,index) in data" :key="index">
      <img v-lazy="item.itemPicUrl">
      <div><span>{{item.title}}</span></div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      data:Array
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.More
  width 100%
  background: #eeeeee
  .More-title
    width 100%
    height 100px
    line-height 100px
    span
      position relative
      z-index 3
      font-size 14px
      color #333
    .More-title-line
      margin-top -50px
      height 1px
      width 100%
      background: #ddd


  .More-content
    padding 10px
    margin 10px
    background: #fff
    img
      width 320px
      height 200px
    div
      width 100%
      height 20px
      span
        float left
        font-size 14px






</style>
