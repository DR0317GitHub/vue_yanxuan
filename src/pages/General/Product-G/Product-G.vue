<template>
  <div>
    <div class="BSa-tter-G">
      <ul class="product_list float_clear">
        <li class="product_item" v-for="(item,index) in data" :key="index">
          <img :src="item.picUrl">
          <div class="product_item_text">{{item.title}}</div>
          <div class="product_item_opcit">{{item.articleCount}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    props: {
      data: Array
    },

    mounted(){
      new BScroll('.BSa-tter-G', {
        click: true,
        scrollX: true, // 水平滑动
      })
    },


  }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .product_list
    width 800px
    height 120px
    padding 10px
    background: #fff
    margin-top 20px
    white-space: nowrap;
    display flex
    flex-wrap nowrap
    .product_item
      width 80px
      height 80px
      background: #f4f4f4
      float left
      margin 0px 10px
      img
        width 100%
        height 100%
      .product_item_text
        font-size 12px
        margin-top 10px
        width 100%
        height 50px
      .product_item_opcit
        position relative
        top -130px
        left 20px
        width 60px
        height 20px
        line-height 20px
        opacity 0.3
        background  #999
        font-size 12px
        color white





</style>
