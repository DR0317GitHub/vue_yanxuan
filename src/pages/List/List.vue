<template>
  <div class="div2">
    <!--固定头部-->
    <header>
      <div class="header_input">
        <i class="iconfont icon-search3"></i>
        <input type="text" placeholder="搜索商品,共9789款好物"/>
      </div>
    </header>

    <ListNav :navData="navData"/>

    <ListContent :navData="navData"/>


  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import ListNav from './List-nav/List-nav.vue'
  import ListContent from './List-Content/List-Content.vue'
  export default {
    data(){
      return{
        current:0
      }
    },
      mounted(){
        this.$store.dispatch('getNavData')
      },
    methods:{
      onRed(index){
        this.current=index
      }
    },

    computed:{
      ...mapState(['navData'])
    },
    components:{
      ListNav,
      ListContent

    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .div2
    width 100%
    height 100%
    header
      position fixed
      z-index 9
      top 0px
      left 0px
      width 100%
      height 30px
      padding 10px 0px
      background #fff
      border-bottom 1px solid #eee
      .header_input
        position relative
        i
          position absolute
          top 8px
          left 110px
          margin-right 5px
        input
          width 60%
          height 30px
          padding-left 120px
          background #ededed
          border-radius 4px
          font-size 12px




</style>
