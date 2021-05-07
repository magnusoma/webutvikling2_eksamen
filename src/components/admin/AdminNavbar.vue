<template>
  <div class="btn-group m-4" role="group">
    <router-link class="btn btn-outline-secondary" to="/admin">Administrer Musikere</router-link>
    <router-link class="btn btn-outline-secondary" to="/admin/job">Administrer Oppdrag</router-link>
  </div>
</template>

<script>


export default {
    name: 'AdminNavbar',
    setup() {
        
    }
}
</script>

<style scoped>

li {
  list-style-type: none;
  font-family: 'Roboto Condensed', sans-serif;
  color: rgb(0, 0, 0);
}

a{
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
    color: rgb(0, 0, 0);
}

</style>