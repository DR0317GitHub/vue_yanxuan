<template>
  <div>
    <div class="product">
      <div class="product_title">
        <span>人气推荐,</span>
        <div class="product_button">
          <div>查看全部</div>
          <i class="iconfont icon-icon"></i>
        </div>
      </div>
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png"/>
    </div>
    <div class="BStter">
      <ul class="product_list float_clear">
        <li class="product_item" v-for="item in data" :key="data.id">
          <img :src="item.listPicUrl">
          <div class="product_item_text">
            <div class="ellipsis item_text1">{{item.name}}</div>
            <div class="ellipsis item_text2">{{item.simpleDesc}}</div>
            <div class="item_text3">¥{{item.retailPrice}}</div>
          </div>
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
      new BScroll('.BStter', {
        click: true,
        scrollX: true, // 水平滑动
      })
    },


  }

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .product
    position relative
    width 375px
    img
      width 375px
      height 150px
    .product_title
      position absolute
      top 50%
      left 50%
      margin-top -35px
      margin-left -40px
      color #8ba0b6
      font-size 18px
      .product_button
        margin-top 10px
        div
          width 110px
          height 30px
          line-height 30px
          text-align center
          color #8ba0b6
          background: #d8e5f1;
          font-size 13px
        i
          display block
          margin-top -25px
          margin-left 67px

  .product_list
    width 1000px
    height 215px
    padding 10px
    background: #fff
    margin-top 10px
    white-space: nowrap;
    display flex
    flex-wrap nowrap
    .product_item
      width 150px
      height 150px
      background: #f4f4f4
      float left
      margin 0px 10px
      img
        width 150px
        height 100%
      .product_item_text
        width 100%
        height 50px
        .item_text1
          color #333
          font-size 14px
          line-height 20px
        .item_text2
          color #7f7f7f
          font-size 12px
          line-height 20px
        .item_text3
          color #b4282d
          float left
          margin-left 5px
          margin-top 10px

</style>
