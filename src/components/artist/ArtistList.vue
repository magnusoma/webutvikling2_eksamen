<template>
    <artist-search
        :searchArtist="searchArtist"
    />
    <section v-if="pageLoaded" class="container">
        <div class="row">
        <artist-item
            v-for="(artist, i) in artistList" :key="i"
            :id="artist.artistId"
            :artistName="artist.artistName"
            :upVote="artist.upVote"
            :downVote="artist.downVote"
            :image="artist.image"
            />
        </div>
    </section>
</template>

<script>
import ArtistItem from './ArtistListItem.vue';
import {ref} from 'vue';
import axios from 'axios';
import ArtistSearch from './ArtistSearch.vue';

export default {
  components: { ArtistItem, ArtistSort },
    setup() {
        let pageLoaded = ref(false);
        const artistList = ref();
        console.log(artistList.value);
        return {artistList, pageLoaded}
    },
    methods: {
        getArtist(){
            axios("https://localhost:5001/artist")
                .then(response => {
                    this.artistList = response.data
            });
        },

        searchArtist(input) {
            axios(`https://localhost:5001/artist/getbyname/${input}`)
                .then(response => {
                    this.artistList = response.data;
                })
        },
    },
    created() {
            this.getArtist()
            this.pageLoaded = true;
    },
}
</script>

<style scoped>

</style>