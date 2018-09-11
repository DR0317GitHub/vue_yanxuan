<template>
  <div class="div">
    <Masklayer/>
    <!--固定头部-->
    <header>
      <div class="header_input">
        <img
          src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png"
          alt="网易优选"/>
        <i class="iconfont icon-search3"></i>
        <input type="text" placeholder="搜索商品,共9789款好物"/>
      </div>
      <div class="betterScroll">
        <ul class="ellipsis">
          <li :class="{'on':current===index}" v-for="(item,index) in navlist" :key="index"
              @click="currentIndex(index)">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    </header>
    <!--锚点-->
    <div class="maoD">
      <a href="javaScript:;" @click="goToTop(0, 0, 500)">
        <div>
          <i class="iconfont icon-arrowup"></i>
        </div>
      </a>
    </div>
    <div class="viewport">
      <div class="content">
        <!--轮播图-->
        <Shuffling/>
          <!--保障承诺-->
          <section class="security">
            <li class="security_li" v-for="(item,index) in homeData.policyDescList">
              <img :src="item.icon"/>
              <span>{{item.desc}}</span>
            </li>
          </section>
        <Grey/>
        <!--品牌直供-->
        <section class="straight">
          <div class="straight_title">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-youjiantou"></i>
          </div>
          <ul class="straight_conent float_clear" v-if="homeData.tagList">
            <li>
              <div class="straight_conent_text">
                <h4>{{homeData.tagList[0].name}}</h4>
                <span>{{homeData.tagList[0].floorPrice}}</span>
                <span>元起</span>
              </div>
              <img class="img" :src="homeData.tagList[0].picUrl">
            </li>
            <li>
              <div class="straight_conent_text">
                <h4>{{homeData.tagList[1].name}}</h4>
                <span>{{homeData.tagList[1].floorPrice}}</span>
                <span>元起</span>
              </div>
              <img class="img" :src="homeData.tagList[1].picUrl">
            </li>
            <li>
              <div class="straight_conent_text">
                <h4>{{homeData.tagList[2].name}}</h4>
                <span>{{homeData.tagList[2].floorPrice}}</span>
                <span>元起</span>
              </div>
              <img class="img" :src="homeData.tagList[2].picUrl">
            </li>
            <li>
              <div class="straight_conent_text">
                <h4>{{homeData.tagList[3].name}}</h4>
                <span>{{homeData.tagList[3].floorPrice}}</span>
                <span>元起</span>
              </div>
              <img class="img" :src="homeData.tagList[3].picUrl">
            </li>
          </ul>
        </section>

        <Grey/>
        <!--新品发布-->
        <Product :data="homeData.newItemNewUserList"></Product>
        <Grey/>
          <!--人气首发-->
        <SenTiment :data="homeData.popularItemList"></SenTiment>
        <Grey/>

        <!--定时器-->
        <Time />

        <Grey/>

        <div class="welfare">
          <img src="//yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg"/>
        </div>

        <Grey/>
        <!--专题精选-->
        <Select :data="homeData.topicList"></Select>

        <Grey style="margin-top: 60px"/>
        <!--更多好物-->
        <GoodThing :data="homeData.cateList"></GoodThing>

        <Grey/>
        <!--底部-->
      <div class="foot">
        <div class="foot-content">
          <span>下载APP</span>
          <span>电脑版</span>
          <div class="foot-content-text1">网易公司版权所有 &copy; 1997-2018</div>
          <div class="foot-content-text1">s食品经营许可证:JK13301080111719</div>
        </div>
      </div>

      </div>
    </div>

  </div>
</template>
<script>
  import {mapState} from "vuex"
  import BScroll from 'better-scroll'
  import Shuffling from './Shuffling/Shuffling.vue'
  import Product from './Product/Product.vue'
  import SenTiment from './SenTiment/SenTiment.vue'
  import Time from './Time/Time.vue'
  import Select from './Select/Select.vue'
  import GoodThing from './GoodThing/GoodThing.vue'
  import Masklayer from '../../components/Masklayer/Masklayer.vue'
  export default {
    data() {
      return {
        navlist: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current: 0,
        isMasklayer: false
      }
    },
    watch: {
      info() {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    mounted() {
      console.log(this.$store)
      this.$store.dispatch('getHomeData', () => {
        this.$nextTick(() => {
          this._initScroll()
          this.bscroll=new BScroll('.viewport', {
            click: true,
            scrollY: true, // 垂直滑动
          })
        })
      })
    },
    methods: {
      currentIndex(index) {
        this.current = index
      },
      _initScroll() {
        new BScroll('.betterScroll', {
          click: true,
          scrollX: true, // 水平滑动
        })
      },
      goToTop(x, y, time, easing){
        console.log('-------------',this)
        this.bscroll.scrollTo(x, y, time, easing)
      },
      backTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      }
    },


    computed: {
      ...mapState(['homeData'])
    },
    components: {
      Shuffling,
      Product,
      SenTiment,
      Time,
      Select,
      GoodThing,
      Masklayer
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .div
    width 100%
    height 100%
    header
      position fixed
      z-index 9
      top 0px
      left 0px
      width 100%
      height 60px
      padding 5px 10px
      background #fff
      .header_input
        position relative
        img
          width 65px
          height 20px
          margin-top 3px
          margin-right 10px
        i
          position absolute
          top 10px
          left 110px
          margin-right 5px
        input
          width 60%
          height 30px
          padding-left 40px
          background #ededed
          border-radius 4px
          font-size 12px

      ul
        background: #fff
        width 800px
        margin-top 15px
        white-space: nowrap
        padding-left 10px
        li
          height 20px
          float left
          margin-right 30px
          & > span
            font-size 15px
            font-weight bold
          &.on
            color #b4282d
            border-bottom 2px solid #b4282d

    .viewport
      width 100%
      height 100%
      .content
        padding-bottom 150px
        width 100%
        .security
          width 100%
          padding-top 10px
          padding-left 20px
          padding-right 20px
          height 30px
          background: white
          .security_li
            float left
            margin-right 25px
            img
              width 15px
              height 15px
            span
              font-size 10px

        .straight
          width 100%
          background: #fff
          .straight_title
            margin-top 25px
            margin-bottom 10px
          .straight_conent
            margin 10px
            width 100%
            li
              margin 3px
              float left
              width 46.5%
              height 125px
              background: #eee
              .straight_conent_text
                float left
                margin-top 10px
                margin-left 6px
              img
                margin-top -30px
                width 90%
                height 90%
        .welfare
          img
            width 100%
            height 200px

        .foot
          padding 10px
          width 100%
          background: #000;
          .foot-content
            span
              color white
              padding 5px 5px
              border 1px solid white
              display inline-block
              margin-right 20px
              margin-bottom 10px
            .foot-content-text1
              color #ccc
              margin-bottom 10px
              font-size 13px


    .maoD
      position fixed
      bottom 55px
      right 10px
      z-index 20
      div
        width 50px
        height 50px
        line-height 50px
        text-align center
        border-radius 50%
        background: #fff
        .iconfont
          color #aaa
          font-size 35px


</style>
