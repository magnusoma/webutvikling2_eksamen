<template>
  <header>
    <h1>Find a musician</h1>
  </header>
  <nav>
    <ul>
      <li><router-link to="/">Hjem</router-link></li>
      <li><router-link to="/admin">Admin</router-link></li>
    </ul>
  </nav>
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>

import'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
