<template>
    <ul>
        <li v-for="(artist, index) in artists" :key="index">
            <artist-list-item
            :artistId="artist.artistId"
            :artistName="artist.artistName"
            :price="artist.price"
            :instrument="artist.instrument"
            :upVotes="artist.upVote"
            :downVotes="artist.downVote"
            />
        </li>
    </ul>      
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import ArtistListItem from './ArtistListItem.vue'

export default {
    navn: 'ArtistList',
    setup() {
        let artists = ref([]);

        axios.get("https://localhost:5001/Artist")
        .then( response => {
            artists.value = response.data;
            console.log(artists.value);
        });

        return { artists }        
    },
    components: { 
        ArtistListItem 
    }
}
</script>