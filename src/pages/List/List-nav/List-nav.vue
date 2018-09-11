<template>
  <div class="Listnav">
    <!--左侧-->
    <ul class="list">
      <li v-for="(item,index) in navData" :key="index">
        <div class="list-left">
          <div class="div" :class="{'on':NavIndex===index }" @click.stop="onRedConent(index)">{{item.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    props:{
      navData:Array
    },

    mounted(){
      new BScroll('.Listnav', {
        click: true,
        scrollY: true, // 垂直滑动
      })
    },
    computed:{
      ...mapState(['NavIndex','NavDetail'])
    },

    methods:{
      onRedConent(index){
        this.$store.dispatch("setNavIndex",{index})
        this.$store.dispatch("getNavDetail")
      },





    },
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .Listnav
    width 100%
    height 100%
    .list
      width 100%
      height 830px
      margin-top 50px
      .list-left
        border-right 1px solid #eeeeee
        width 25%
        div
          text-align center
          width 100px
          padding 20px 0
          font-size 14px
          &.on
            color #b4282d
            font-size 20px
            font-weight bold
            border-left 3px solid #b4282d
</style>
