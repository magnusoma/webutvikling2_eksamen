<template>
  <section>
    <nav class="navbar navbar-dark bg-dark navbar-light justify-content-between">
         <h2 class="navbar-brand" href="#">Find<br> a <br>Musician</h2>
      <li class="navbar-brand"><router-link to="/mission">Legg inn oppdrag</router-link></li>
      <li class="navbar-brand"><router-link to="/">Våre artister</router-link></li>
       
    </nav>
</section>
<h1 id="title">Find a Musician</h1>
</template>

<script>
export default {
    name: "HeaderMain"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@700&display=swap');
h1, h2{
    font-family: 'Oleo Script', cursive;
}
body{
    margin: 0;
    padding: 0;
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
       font-family: 'Roboto Condensed', sans-serif;
    
}


a {
    text-decoration: none;
    color: rgb(219, 219, 219);
    margin: 20rem;
    
}

</style>