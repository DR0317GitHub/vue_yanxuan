<template>
    <div class="xy-look" v-if="data">
      <div class="xy-look-title">严选LOOK</div>
      <img :src="data.picUrl">
      <div class="xy-look-head">
        <img :src="data.avatar">
        <span>{{data.nickname}}</span>
      </div>
      <p>{{data.content}}</p>
    </div>
</template>
<script>
  export default {
    props:{
      data:Object
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .xy-look
    width 100%
    .xy-look-title
      font-size 16px
      margin 20px 0px
    img
      width 100%
      height 400px
    .xy-look-head
      height 30px
      margin 15px
      img
        float left
        width 30px
        height 30px
        border-radius 50%
      span
        float left
        margin-left 15px
        margin-top 10px

    p
      line-height 28px
      padding 0 10px
      font-size 14px
      color #999



</style>
