<template>
  <div>
    <!--固定头部-->
    <header>
      <div class="header_input">
        <i class="iconfont icon-search3"></i>
        <input type="text" placeholder="搜索商品,共9789款好物"/>
      </div>
    </header>

    <!--左侧-->
    <ul class="list-left">
      <li :class="{'on':current===index }"   v-for="(item,index) in navData" :key="index"
      @click="onRed(index)">{{item.name}}</li>
    </ul>

  </div>
</template>
<script>
  import {mapState} from 'vuex'
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
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
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



  .list-left
    position absolute
    top 0px
    left 0px
    width 100px
    height 100%
    margin-top 50px
    border 1px solid #eeeeee
    li
      margin-top 30px
      font-size 14px
      &.on
        color #b4282d
        font-size 20px
        font-weight bold
</style>
