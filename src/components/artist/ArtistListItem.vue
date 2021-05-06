<template>
    <article class="card border-0 col-lg-4 col-mg-4 col-sm-4 pt-4 px-4">
        <img class="artist-image card-img-top" :src="`https://localhost:5001/images/artist_images/${image}`">
        <div class="card-body">
             <router-link :to="{name: 'ArtistView', params:  {
            id: id}}">
            <h3>{{artistName}}</h3>
            </router-link>
            <p>{{upVote}}</p>
            <p>{{downVote}}</p>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        id: Number,
        artistName: String,
        upVote: Number,
        downVote: Number,
        image: String
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
h3, p, a {
    font-family: 'Roboto Condensed', sans-serif;
    text-decoration: none;
    color:black;
}

</style>