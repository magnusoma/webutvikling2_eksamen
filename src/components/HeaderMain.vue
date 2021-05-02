<template>
    <section>
        <h1>Find a Musician
        </h1>
        <nav>
            <ul>
                <li><router-link to="/mission">Legg inn oppdrag</router-link></li>
                <li><router-link to="/player-page">Våre eskorter</router-link></li>
            </ul>
        </nav>
    </section>
</template>

<script>
export default {
    name: "HeaderMain"
}
</script>

<style scoped>

ul {
    width: 100%;
    height: 1rem;
    background-color: rgb(56, 56, 56);
    justify-content: space-around;
    align-items: center;
}


a {
    text-decoration: none;
    color: rgb(138, 138, 138);
}

</style>