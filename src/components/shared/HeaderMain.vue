<template>
    <nav class="row">
        <h1 class="col" href="#">Find a <br>Musician</h1>
        <li class="col"><router-link to="/">Våre artister</router-link></li>
        <li class="col"><router-link to="/mission">Kontakt oss</router-link></li>
    </nav>
</template>

<script>
export default {
    name: "HeaderMain"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script:wght@700&display=swap');
h1{
    font-family: 'Oleo Script', cursive;
    font-size: 2em;
    padding: 10px;
}
body{
    margin: 0;
    padding: 0;
}

nav {
    position: sticky;
    top: 0;
    width: 100vw;
    z-index: 2;
    background-color: #332C33;
}

li {
    list-style-type: none;
    margin: auto;
    font-family: 'Roboto Condensed', sans-serif; 
}

a {
    font-size: 2em;
}

a, h1 {
    text-decoration: none;
    color: rgb(219, 219, 219);
}
@media only screen and (max-width: 1000px){
    a, h1 {
        font-size: 1.3em;
    }
}


</style>