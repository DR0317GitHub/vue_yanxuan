<template>
  <div id="app">
    <!--显示当前页面-->
    <router-view/>
    <Footer v-show="$route.meta.ShowFooter" />
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer.vue'
  import axios from 'axios'
  export default {
    components:{
      Footer
    },
  mounted(){
    axios.get('/homedata').then(response =>{
      console.log(response.data)
    })
  }
}
</script>

<style>
  @import "../static/css/react.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;

}
</style>
