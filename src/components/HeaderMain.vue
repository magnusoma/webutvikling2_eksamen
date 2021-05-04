<template>
  <section>
    <h1>Find a Musician</h1>
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <li class="navbar-brand"><router-link to="/mission">Legg inn oppdrag</router-link></li>
      <li class="navbar-brand"><router-link to="/">Våre artister</router-link></li>
    </nav>
</section>
</template>

<script>
export default {
    name: "HeaderMain"
}
</script>

<style scoped>

form {
    padding: 12px;
}

ul {
    width: 100%;
    height: 5rem;
    background-color: rgb(0, 0, 0);
    justify-content: space-around;
    align-items: center;

}

li {
    list-style-type: none;
    padding: 12px;
}


a {
    text-decoration: none;
    color: rgb(219, 219, 219);
    
}

</style>