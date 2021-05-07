<template>
  <div>
    <ul class="row justify-content-center">
      <li><router-link class="col btn btn-danger" to="/admin">Administrer Musikere</router-link></li>
      <li><router-link class="col btn btn-danger" to="/admin/job">Administrer Oppdrag</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'AdminNavbar',
    setup() {
        
    },components: {

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