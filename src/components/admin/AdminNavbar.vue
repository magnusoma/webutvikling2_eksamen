<template>
  <div>
    <ul class="row">
      <li class="col"><router-link to="/admin">Musikkere</router-link></li>
      <li class="col"><router-link to="/admin/job">Oppdrag</router-link></li>
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
}

a{
    text-decoration: none;
}

</style>