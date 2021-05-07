<template>

    <article class="card-group col-md-6 col-lg-4 col-xl-3">
        <div class="card border-dark border-2 mb-3">
            <div class="card-body">
                <router-link id="artist" class="card-title display-5" :to="`/admin/${artistId}`">{{ artistName }}</router-link>
                <p class="card-title h3">{{ price }}kr</p>
                <p class="card-title h3">{{ instrument }}</p>
                <p class="card-title">Upvotes:{{ upVotes }}</p>
                <p class="card-title">Downvotes:{{ downVotes }}</p>
                <!--Delete button to open confirmation window and passing artistId as argument-->
                <input type="button" class="btn btn-danger" value="Slett Musiker" @click="openDeleteWindow(artistId)">
            </div>
        </div>
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
p, li{
    font-family: 'Roboto Condensed', sans-serif;
   
}
#artist {
font-family: 'Roboto Condensed', sans-serif;
    text-decoration: none;
    color:black;
}
</style>