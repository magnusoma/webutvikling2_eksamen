<template>
    <article>
        <h1>{{ artist.artistName }}</h1>
        <img :src="`https://localhost:5001/images/artist_images/${artist.image}`" :alt="artist.artistName">
        <p>{{ artist.price }}kr</p>
        <p>{{ artist.instrument }}</p>
        <h3>Bio</h3>
        <p>{{ artist.bio }}</p>
        <p>{{ artist.upVote }}</p>
        <p>{{ artist.downVote }}</p>
    </article>
</template>

<script>
export default {
    name: 'ArtistItem',
    props: {
        artist: {
            type: Object
        }
    }
}
</script>