<template>
    <article class="card col-lg-4 col-mg-6 col-sm-12" style="width: 18rem">
        <router-link :to="{name: 'ArtistView', params:  {
            id: id}}">
        <h3>{{artistName}}</h3>
        </router-link>
        <p>{{upVote}}</p>
        <p>{{downVote}}</p>
        <img class="artist-image" :src="`https://localhost:5001/images/artist_images/${image}`">
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

</style>