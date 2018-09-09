<template>
  <div class="topic">
    <!--固定头部-->
    <header>
      <div class="header_input">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"
          alt="网易优选"/>
          <i class="iconfont icon-sinaweibo05 home"></i>
        <div class="seacher">
          <i class="iconfont icon-search3 "></i>
          <i class="iconfont icon-tab-bar--n chart"></i>
        </div>

      </div>

    </header>
    <div class="viewport-G">
      <div class="content">
        <!--轮播图-->
        <Shuffling />

        <!--新品发布-->
        <Product :data="topicData.column"></Product>

        <Grey/>

        <Recommend :data="topicData.recommend"></Recommend>






      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  import Shuffling from './Shuffling_G/Shuffling-G.vue'
  import Product from './Product-G/Product-G.vue'
  import Recommend from './Recommend/Recommend.vue'

  export default {
    mounted(){
      this.$store.dispatch("getTopicData")
        this.$nextTick(() => {
          new BScroll('.viewport-G', {
            click: true,
            scrollY: true, // 垂直滑动
          })
        })
    },
     computed:{
       ...mapState(['topicData'])
     },
    components:{
      Shuffling,
      Product,
      Recommend
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .topic
    width 100%
    height 200%
    header
      position fixed
      z-index 9
      top 0px
      left 0px
      width 100%
      height 50px
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
          margin-top 10px
          margin-left 10px
        .home
          font-size 20px
          float left
          margin-left 20px
        .seacher
          float right
          i
            font-size 20px
            margin-right 20px


    .viewport-G
      width 100%
      height 200%
      .content
        width 100%

</style>
