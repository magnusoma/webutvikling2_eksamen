<template>
    <article>
        <h1>{{ artist.artistName }}</h1>
        <img :src="'https://localhost:5001/images/' + artist.image " :alt="artist.artistName">
        <p>{{ artist.price }}kr</p>
        <p>{{ artist.instrument }}</p>
        <h3>Bio</h3>
        <p>{{ artist.bio }}</p>
        <p>{{ artist.upVote }}</p>
        <p>{{ artist.downVote }}</p>
    </article>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export default {
    navn: 'ArtistItem',
    setup() {
        const artistId = useRoute().params.id;
        let artist = ref([]);

        axios.get(`https://localhost:5001/artist/${ artistId }`)
        .then( response => {
            artist.value = response.data;
        });


        return { artist }        
    

    }
}
</script>