<template>
<h1>Find a Musician</h1>
    <nav class="navbar navbar-dark bg-dark justify-content-between">
  <li class="navbar-brand"><router-link to="/">Legg inn oppdrag</router-link></li>
    <li class="navbar-brand"><router-link to="/player-page">Våre artister</router-link></li>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Søk etter artist" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Søk</button>
  </form>
</nav>
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