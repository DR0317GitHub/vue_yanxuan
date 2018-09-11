<template>
  <div v-if="NavDetail">

  <div class="listDetail" :class="{'anim' : anim === true}" v-if="NavDetail">
    <div class="warp">
      <div class="banner">
        <img :src="NavDetail.bannerUrl" alt="">
      </div>
      <div class="detailTit">
          <span class="text">
            <span>{{NavDetail.name}}</span>
            <span>分类</span>
          </span>
      </div>
      <section class="detail">
        <ul class="list">
          <li class="item" v-for="(item) in NavDetail.subCateList" :key="item.id">
            <a href="javascript:;">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    props:{
      navData:Array
    },
    data () {
      return {
        anim: false
      }
    },
    mounted () {
      this.$store.dispatch('getNavDetail', () => {
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    computed: {
      ...mapState(['NavDetail'])
    },
    methods: {
      _initScroll () {
        new BScroll ('.listDetail', {
          click: true,
          startY: 0
        })
      }
    },
    watch: {
      navData(){
        this.$store.dispatch('getNavDetail')
      },
      navDetail: function () {
        this.anim = true
        this.timer = setTimeout(() => {
          clearTimeout(this.timer)
          this.anim = false
        }, 800)
      }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../../common/stylus/mixins.styl'
  @keyframes animTop
    30%
      transform  translate3d(0, -50px, 0)
    60%
      transform translate3d(0, 50px, 0)
    80%
      transform  translate3d(0, -10px, 0)
    100%
      transform translate3d()
  .listDetail
    margin-top -670px
    margin-left 95px
    height 522px
    background #ffffff
    &.anim
      animation animTop .8s
    .warp
      padding 15px 15px 10px
      height auto
      background #ffffff
      .banner
        width 100%
        height 96px
        border-radius 4px
        img
          width 100%
          height 100%
      .detailTit
        height 54px
        line-height 54px
        text-align center
        font-size 12px
        color #333333
        .text
          position relative
          font-size 0
          >span
            font-size 12px
          &:before,&:after
            position absolute
            content ''
            top -10px
            bottom 0
            margin auto
            height 1px
            width 20px
            background-color #d9d9d9
          &:before
            left -28px
          &:after
            right -28px
      .detail
        >.list
          >.item
            display inline-block
            margin-right 17px
            font-size 0
            width 72px
            vertical-align top
            &:nth-child(3n)
              margin-right -5px
            >a
              color #333333
              >img
                width 72px
                height 72px
              >span
                display block
                height 36px
                line-height 17px
                text-align center
                font-size 12px
</style>
