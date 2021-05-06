<template>
    <header-main/>
  <main class="container">
    <router-view></router-view>
  </main>
      <footer-main/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderMain from '/src/components/shared/HeaderMain.vue'
import FooterMain from '/src/components/shared/FooterMain.vue'

export default {
  name: 'App',
  setup() {
 
   return {}
  },
  components: {
    HeaderMain,
    FooterMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
