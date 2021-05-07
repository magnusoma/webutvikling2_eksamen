<template>
   <div class="row justify-content-center">
    <article
        class="card position-fixed bg-light border border-1 border-dark rounded-3 w-25">  

        <i class="fas fa-times" @click="closeDeleteWindow"></i>
        <h3>Er du sikker på at du vil slette {{ artistName }}?</h3>
        <!--YES and NO buttons for deleting artist, both closes the delete window.
        Yes button also call delete method passing artistId as argument-->
        <input class="btn btn-primary m-2" type="button" value="Ja" @click="closeDeleteWindow(), deleteArtist(artistId)">       
        <input class="btn btn-danger m-2" type="button" value="Nei" @click="closeDeleteWindow">
        
    </article>
   </div>
</template>

<script>
export default {
    name: 'ArtistDeleteConfirmation',
    setup() {
        
    },
    props: {
        artistId: {
            type: Number,
            required: true
        },
        artistName: {
            type: String
        },
        closeDeleteWindow: {
            type: Function
        },
        deleteArtist: {
            type: Function
        }

    }
}
</script>

<style scoped>
h3{
    font-family: 'Roboto Condensed', sans-serif;
    color: rgb(0, 0, 0);
}
.fa-times{
    position: absolute;
    left: 0.5em;
    top: 0.5em;
}
article{
    z-index: 3;
}
</style>