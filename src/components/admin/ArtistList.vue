<template>
    <section>
        <!--Popup window to comfirm deleteing artist-->
        <artist-delete-confirmation
        v-if="renderDeleteWindow"

        :artistId="artistToDelete.artistId"
        :artistName="artistToDelete.artistName"
        :closeDeleteWindow="closeDeleteWindow"
        :deleteArtist="deleteArtist"
        />

        <ul>
            <li v-for="artist in artists" :key="artist.artistId">
                <artist-list-item
                :artistId="artist.artistId"
                :artistName="artist.artistName"
                :price="artist.price"
                :instrument="artist.instrument"
                :upVotes="artist.upVote"
                :downVotes="artist.downVote"
                :openDeleteWindow="openDeleteWindow"
                />
            </li>
        </ul>
    </section>
          
</template>

<script>
import axios from 'axios'
import { ref, reactive } from 'vue'
import ArtistListItem from './ArtistListItem.vue'
import ArtistDeleteConfirmation from './ArtistDeleteConfirmation'

export default {
    navn: 'ArtistList',
    setup() {
        let artists = ref([]);

        let artistToDelete = reactive({});
        let renderDeleteWindow = ref(false);

        axios.get("https://localhost:5001/Artist")
        .then( response => {
            artists.value = response.data;
        });

        return {
            artists,
            renderDeleteWindow,
            artistToDelete
        }        
    },
    methods: {
        //Finding artist to delete and passing values with props when rendering delete popup window
        openDeleteWindow(id) {
            this.artistToDelete = this.artists.find( artist => artist.artistId == id );
            this.renderDeleteWindow = true;
        },
        //Closing delete popup window
        closeDeleteWindow() {
            this.renderDeleteWindow = false;
        },
        //Deleting artist
        deleteArtist(id) {
            axios.delete( `https://localhost:5001/Artist/${id}` )
                .then( response => {
                    response.data;
                } )
        }   
    },
    components: { 
        ArtistListItem,
        ArtistDeleteConfirmation
    }
}
</script>