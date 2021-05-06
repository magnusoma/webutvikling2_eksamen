<template>
    <article>
        <router-link :to="`/admin/${artistId}`">{{ artistName }}</router-link>
        <p>{{ price }}kr</p>
        <p>{{ instrument }}</p>
        <p>{{ upVotes }}</p>
        <p>{{ downVotes }}</p>
        <!--Delete button to open confirmation window and passing artistId as argument-->
        <input type="button" class="btn btn-dark" value="Slett Musikker" @click="openDeleteWindow(artistId)">
    </article>
</template>

<script>
export default {
    name: 'ArtistListItem',
    props: {
        artistId: {
            type: Number
        },
        artistName: {
            type: String
        },
        price: {
            type: Number
        },
        instrument: {
            type: String
        },
        upVotes: {
            type: Number
        },
        downVotes: {
            type: Number
        },
        openDeleteWindow: {
            type: Function
        }
    }
}
</script>

<style scoped>
p{
    font-family: 'Roboto Condensed', sans-serif;
}
</style>