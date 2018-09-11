<template>
  <div>
    <div class="product">
      <div class="straight_title">十点一刻</div>
    </div>
    <div class="BSa-tter">
      <ul class="product_list float_clear">
        <li class="product_item" v-for="(item,index) in data" :key="index">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png"/>
          <div class="product_item_text">
            <div class="item_text0">--今日话题--</div>
            <div class="ellipsis item_text1">{{item.title}}</div>
            <div class="ellipsis item_text2">{{item.desc}}</div>
            <div class="item_text3">{{item.participantNum}}人参与话题</div>
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
      new BScroll('.BSa-tter', {
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
    .straight_title
      margin-top 20px
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
      width 370px
      height 200px
      background: #f4f4f4
      float left
      margin 0px 10px
      img
        width 100%
        height 100%
      .product_item_text
        margin-top -180px
        width 100%
        height 50px
        .item_text0
          color #aaa
        .item_text1
          margin-top 20px
          color #333
          font-size 18px
          font-weight bold
          margin-bottom 10px
        .item_text2
          color #7f7f7f
          font-size 15px
          line-height 20px
        .item_text3
          margin-top 30px
          font-size 12px



</style>
