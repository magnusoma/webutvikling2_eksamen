<template>
    <div>
    <ul>
      <li><router-link to="/admin">Musikkere</router-link></li>
      <li><router-link to="/admin/job">Oppdrag</router-link></li>
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