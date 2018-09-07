<template>
  <!--轮播图-->
  <div class="swiper-container">
    <div class="swiper-wrapper" >
      <div  class="swiper-slide" v-for="item in homeData.focusList" :key="item.id">
        <a href="javascript:;">
          <img :src="item.picUrl" alt="">
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
      ...mapState(['homeData'])
    }

  }




</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

  .swiper-container
    margin-top 75px
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


</style>
