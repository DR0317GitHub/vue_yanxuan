<template>
  <div v-if="data">
    <div class="one">
      <div class="title">{{data.name}}</div>
      <img :src="data.Item[0].picUrl"/>
      <div class="title-text">
        <span class="title-text-left">{{data.Item[0].title}}</span>
        <span class="title-text-right">{{data.Item[0].priceInfo}}元起</span>
      </div>
      <div class="title-text-bottom">{{data.Item[0].subTitle}}</div>
    </div>
    <div class="two">
      <div class="two_text" >
        <div class="two_text1 ellipsis">{{data.Item[1].title}}</div>
        <div class="two_text2 ellipsis">{{data.Item[1].subTitle}}</div>
      </div>
      <img :src="data.Item[1].picUrl"/>
    </div>
    <div class="two">
      <div class="two_text" >
        <div class="two_text1 ellipsis">{{data.Item[2].title}}</div>
        <div class="two_text2 ellipsis">{{data.Item[2].subTitle}}</div>
      </div>
      <img :src="data.Item[2].picUrl"/>
    </div>




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
  .one
    border 1px solid #ccc
    margin 10px 10px
    .title
      margin 20px 0px
      font-size 14px
    img
      width 335px
      height 200px
    .title-text
      margin-top 15px
      .title-text-left
        display inline-block
        margin-right 90px
    .title-text-bottom
      font-size 13px
      color #666
      margin 20px 80px 20px 0px

  .two
    margin 10px 10px
    border 1px solid #ccc
    .two_text
      margin-top 40px
      margin-left 20px
      width 180px
      .two_text1
        font-size 20px
      .two_text2
        font-size 14px
        color #999
        margin-top 20px
    img
      width 150px
      height 150px
      margin-top -94px
      margin-right -200px












</style>
