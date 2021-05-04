<template>
    <article >
        <artist-item
            v-for="(artist, i) in artistList" :key="i"
            :id="artist.artistId"
            :artistName="artist.artistName"
            :upVote="artist.upVote"
            :downVote="artist.downVote"
            />
</template>

<script>
import ArtistItem from './ArtistItem.vue';
import {ref} from 'vue';
import axios from 'axios';

export default {
  components: { ArtistItem },
    setup() {
        const artistList = ref();
        axios("https://localhost:5001/artist")
            .then(response => {
                artistList.value = response.data
                console.log(response.data)
            });
        console.log(artistList.value);
        return {artistList}
    },
}
</script>