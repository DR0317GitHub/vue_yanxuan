<template>
  <!--轮播图-->
  <div class="swiper-container">
    <div class="swiper-wrapper" >
      <div  class="swiper-slide" v-for="item in topicData.banner" :key="item.id">
        <a href="javascript:;">
          <img :src="item.picUrl" alt="">
          <div class="opcit">
            <div class="opcit1">--{{item.subTitle}}--</div>
            <div class="opcit2">{{item.title}}</div>
            <div class="opcit3">{{item.desc}}</div>
          </div>
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination" slot="pagination"></div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
      date(){
        return{
          swiperOption: {
            pagination: {
              el: '.swiper-pagination'
            }
          }
        }
      },
    mounted () {
      new Swiper ('.swiper-container', {
        loop : true,
        autoplay: {
          disableOnInteraction: false,
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    computed:{
      ...mapState(['topicData'])
    }

  }




</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  .swiper-container
    margin-top 40px
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 200px
      .swiper-slide
        a
          display block
          height  200px
        img
          width 100%
          height 100%

        .opcit
          position absolute
          top 40px
          left 80px
          z-index 20
          width 240px
          height 100px
          opacity 0.8
          color #000
          background: #fff
          .opcit1
            font-size 12px
            margin-top 10px
          .opcit2
            margin-top 15px
            font-size 16px
            font-weight bold
          .opcit3
            margin-top 15px
            font-size 13px


</style>
