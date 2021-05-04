<template>
    <article>
        <router-link :to="{name: 'ArtistView', params:  {
            id: id}}">
        <h3>{{artistName}}</h3>
        </router-link>
        <p>{{upVote}}</p>
        <p>{{downVote}}</p>
        <img :src="`https://localhost:5001/images/${image}`">
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