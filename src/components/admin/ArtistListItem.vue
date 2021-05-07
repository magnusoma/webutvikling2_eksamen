<template>
    <article class="card-group col-md-6 col-lg-4 col-xl-3">
        <div class="card border-1 mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ artistName }}</h5>
                <p class="card-subtitle text-muted">{{ instrument }}</p>
                <p class="card-subtitle text-muted mb-4">kr. {{ price }} per time</p>
                <p class="card-text">Antall positive vurderinger: {{ upVotes }}</p>
                <p class="card-text">Antall negative vurderinger: {{ downVotes }}</p>
                <!--Delete button to open confirmation window and passing artistId as argument-->
                <router-link id="artist" :to="`/admin/${artistId}`">
                    <input type="button" class="btn btn-outline-info m-2" value="Endre musiker">
                </router-link>
                <input type="button" class="btn btn-outline-danger m-2" value="Slett musiker" @click="openDeleteWindow(artistId)">
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
}
</style>