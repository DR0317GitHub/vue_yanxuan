<template>
  <div class="timer">
    <section class="time-left">
      <div class="time-text">严&nbsp;选&nbsp;限&nbsp;时&nbsp;购</div>
      <div class="time">
        <div>00</div>
        <span class="span1">:</span>
        <div>00</div>
        <span class="span2">:</span>
        <div>00</div>
      </div>
      <div class="time-next">下一场 22:00 开始</div>
    </section>
    <img src="http://yanxuan.nosdn.127.net/d9c864b39c9293e93ae7e721e98bf8c8.jpg?imageView&quality=85&thumbnail=330x330"/>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .timer
    width 100%
    height 100%
    background: #fff
    padding-top 40px
    padding-left 10px
    padding-right 20px
    .time-left
      width 45%
      height 100%
      float left
      .time-text
        font-size 20px
      .time
        margin-left 10px
        margin-top 10px
        margin-bottom 10px
        div
          width 30px
          height 30px
          line-height 30px
          text-align center
          background: #000
          float left
          color #fff
          margin 10px 8px
        span
          display inline-block
          color #000
          font-weight 800
        .span1
          position relative
          top 15px
          left -97px
        .span2
          position relative
          top 15px
          left -62px
      .time-next
        width 150px
        height 20px
    img
      width 150px
      height 150px




</style>
