<template>
  <div>
    <!--专题精选-->
    <section class="straight">
      <div class="straight_title">
        <span>专题精选</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </section>

    <div class="BScrolltter">
      <ul class="product_list float_clear">
        <li class="product_item" v-for="item in data" :key="data.id">
          <img :src="item.itemPicUrl">
          <div class="product_item_text">
            <div class="ellipsis item_text1">{{item.title}}</div>
            <div class="ellipsis item_text2">{{item.subtitle}}</div>
          </div>
          <div class="item_text3">¥{{item.priceInfo}}起</div>
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
      new BScroll('.BScrolltter', {
        click: true,
        scrollX: true, // 水平滑动
      })
    },


  }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .straight
    width 100%
    height 100%
    background: #fff
    .straight_title
      margin-top 25px
      margin-bottom 10px


  .BScrolltter
    width 100%
    height 100%
    .product_list
      width 1000px
      height  100%
      padding 10px
      background: #fff
      margin-top 10px
      white-space: nowrap;
      display flex
      flex-wrap nowrap
      .product_item
        width 300px
        height 200px
        background: #fff
        float left
        margin 0px 10px
        img
          border-radius 5%
          width 300px
          height 100%
        .product_item_text
          width 100%
          height 50px
          margin-left -80px
          .item_text1
            color #000
            font-size 16px
            line-height 20px
            margin 5px 10px
          .item_text2
            margin-left 50px
            color #7f7f7f
            font-size 14px
            line-height 20px
        .item_text3
          color #b4282d
          float right
          margin-top -40px
          margin-right 20px



</style>
