<template>
    <section class="container">
        <div class="row">
        <artist-list-item
            v-for="artist in artistList" 
            :key="artist.artistId"

            :artist="artist"
            :updateArtist="updateArtist"
            />
        </div>
    </section>
</template>

<script>
import ArtistListItem from './ArtistListItem.vue';
import {ref} from 'vue';
import axios from 'axios';

export default {
  components: { ArtistListItem },
    setup() {
        const artistList = ref();
        axios("https://localhost:5001/artist")
            .then(response => {
                artistList.value = response.data
            })
        return {artistList}
    },
    methods: {
        updateArtist(artistObj) {
            axios.put("https://localhost:5001/artist", artistObj)
                .then( response => {
                    artistObj = response.data;
                })
        }
    }
}
</script>

<style scoped>

</style>