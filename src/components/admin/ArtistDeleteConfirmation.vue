<template>
    <article 
    class=
        "position-fixed
        border
        border-5
        border-dark
        bg-info"
    >

        <i class="fas fa-times" @click="closeDeleteWindow"></i>
        <h3>Er du sikker på at du vil slette {{ artistName }}?</h3>
        <!--YES and NO buttons for deleting artist, both closes the delete window.
        Yes button also call delete method passing artistId as argument-->
        <input type="button" value="Nei" @click="closeDeleteWindow">
        <input type="button" value="Ja" @click="closeDeleteWindow(), deleteArtist(artistId)">
    </article>
</template>

<script>
export default {
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