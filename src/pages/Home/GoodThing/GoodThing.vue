<template>
  <!--好物-->
  <section class="straight">
    <div class="straight_title" v-for="item in data" :key="data.id">
      <div class="grey"></div>
      <span>{{item.name+"好物"}}</span>
      <ul class="straight_conent float_clear">
          <li v-for="data in item.itemList" :key="data.id">
            <img  v-lazy="data.listPicUrl">
            <div class="ellipsis straight_conent_info">{{data.simpleDesc}}</div>
            <div class="straight_conent_text">
              <div class="ellipsis">{{data.name}}</div>
              <div class="ellipsis many">¥{{data.retailPrice}}</div>
            </div>
          </li>
        </ul>

      </div>
  </section>
</template>
<script>
  export default {
    props: {
      data: Array
    },
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
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
        margin-right 10px
        margin-bottom 75px
        float left
        width 46%
        height 205px
        background: #eee
        img
          width 90%
          height 80%
        .straight_conent_info
          width 100%
          height 30px
          line-height 30px
          text-align center
          color #9f8a60
          background #f1ece2
          font-size 14px
        .straight_conent_text
          margin-top 20px
          div
            width 100%
            margin-top 10px
            &.many
              margin-left -40px
              color #b4282d
              font-size 18px
        .grey
          width: 375px
          height: 10px
          margin-top 20px
          background: #f3f5f7
</style>
