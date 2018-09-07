<template>
  <div>
    <!--固定头部-->
    <header>
      <div class="header_input">
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="网易优选"/>
        <i class="iconfont icon-search3"></i>
        <input type="text" placeholder="搜索商品,共9789款好物"/>
      </div>
      <div class="betterScroll" >
        <ul class="ellipsis">
          <li :class="{'on':current===index}" v-for="(item,index) in navlist" :key="index"
          @click="currentIndex(index)">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>

    </header>
    <!--轮播图-->
    <Shuffling />
    <!--保障承诺-->
    <section class="security">
      <li class="security_li" v-for="(item,index) in homeData.policyDescList">
        <img :src="item.icon"/>
        <span>{{item.desc}}</span>
      </li>
    </section>

    <Grey />
  </div>

</template>
<script>
  import {mapState} from "vuex"
  import BScroll from 'better-scroll'
  import Shuffling from './Shuffling/Shuffling.vue'
  export default {
    data(){
      return{
        navlist: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        current:0

      }
    },
    watch: {
      info() {
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    },
    mounted(){
      console.log(this.$store)
      this.$store.dispatch('getHomeData', () => {
        this.$nextTick(() => {
          this._resetTime()
          this._initScroll()
        })
      })
    },
    methods:{
      currentIndex(index){
        this.current=index
      },
      _initScroll(){
        new BScroll('.betterScroll', {
          click: true,
          scrollX: true, // 水平滑动
        })
      },
      _resetTime () {
        this.timer = setTimeout (() => {
          clearTimeout(this.timer)
          this.time = [2, 60, 60]
        }, 2 * 60 * 60 * 1000)
      }
    },

    computed:{
      ...mapState(['homeData'])
    },
    components:{
      Shuffling
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  header
    position fixed
    z-index 9
    top 0px
    left 0px
    width 100%
    height 60px
    padding 5px 10px
    background: #fff
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
      width 900px
      margin-top 15px
      white-space:nowrap
      padding-left 10px
      li
        height 20px
        float left
        margin-right  20px
        &>span
          font-size 12px
          font-weight bold
        &.on
          color #b4282d
          border-bottom 2px solid #b4282d



  .security
    width 100%
    padding-top 10px
    padding-left 20px
    padding-right  20px
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

</style>
