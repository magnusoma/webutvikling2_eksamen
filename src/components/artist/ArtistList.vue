<template>
    <artist-search
        :searchArtist="searchArtist"
        :getArtists="getArtists"
        :filterArtist="filterArtist"
        :setFilter="setFilter"
    />
    <section v-if="pageLoaded" class="container">
        <div class="row">
        <artist-list-item
            v-for="artist in artistList" 
            :key="artist.artistId"
            v-show="artist.instrument == filter || filter == 'all'"

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
import ArtistSearch from './ArtistSearch.vue';

export default {
  components: { ArtistListItem, ArtistSearch },
    setup() {
        let pageLoaded = ref(false);
        const artistList = ref();
        let filter = ref("all");
        return {artistList, pageLoaded, filter}
    },
    methods: {
        getArtists(){
            axios("https://localhost:5001/artist")
                .then(response => {
                    this.artistList = response.data
            });
        },
        updateArtist(artistObj) {
            axios.put("https://localhost:5001/artist", artistObj)
                .then( response => {
                    artistObj = response.data;
                })
        },

        searchArtist(input) {
            axios(`https://localhost:5001/artist/getbyname/${input}`)
                .then(response => {
                    this.artistList = response.data;
                })
        },
        filterArtist(_genre) {
            this.artistList = this.artistList.filter(a => a.instrument == _genre);
        },
        setFilter(filter) {
            this.filter = filter;
        }
    },
    created() {
        this.getArtists()
        this.pageLoaded = true;
    },
}
</script>