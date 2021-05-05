<template>
    <section>

        <input type="button" value="Legg til ny musikker" @click="renderUploadWindow = true">

        <upload-artist
        v-if="renderUploadWindow"
        :closeUploadWindow="closeUploadWindow"
        :uploadArtist="uploadArtist"
        />
        
        <!--Popup window to comfirm deleteing artist-->
        <artist-delete-confirmation
        v-if="renderDeleteWindow"

        :artistId="artistToDelete.artistId"
        :artistName="artistToDelete.artistName"
        :closeDeleteWindow="closeDeleteWindow"
        :deleteArtist="deleteArtist"
        />

        <artist-list-item
        v-for="artist in artists"
        :key="artist.artistId"

        :artistId="artist.artistId"
        :artistName="artist.artistName"
        :price="artist.price"
        :instrument="artist.instrument"
        :upVotes="artist.upVote"
        :downVotes="artist.downVote"
        :openDeleteWindow="openDeleteWindow"
        />

        
                
           
    </section>
          
</template>

<script>
import axios from 'axios'
import { ref, reactive } from 'vue'
import ArtistListItem from './ArtistListItem.vue'
import UploadArtist from '../../components/admin/UploadArtist.vue'
import ArtistDeleteConfirmation from './ArtistDeleteConfirmation'

export default {
    navn: 'ArtistList',
    setup() {
        let artists = ref([]);

        let artistToDelete = reactive({});
        let renderUploadWindow = ref(false);
        let renderDeleteWindow = ref(false);        

        return {
            artists,
            renderUploadWindow,
            renderDeleteWindow,
            artistToDelete
        }        
    },
    methods: {
        //Uploading artist and artist image to WebApi
        uploadArtist(artistObj, imageData) {
            axios.post( "https://localhost:5001/artist/", artistObj )
                .then( () => {
                    axios(
                        {
                            method: "POST",
                            url: "https://localhost:5001/artist/SaveImage",
                            data: imageData,
                            config: { headers: { "Content-Type" : "multipart/form-data" } }
                        }
                    );
                    this.closeUploadWindow();
                    this.renderArtists();
                })
        },
        //Render artists from WebApi
        renderArtists() {
            axios.get("https://localhost:5001/Artist")
                .then( response => {
                    this.artists = response.data;
                });
        },
        //Finding artist to delete and passing values with props when rendering delete popup window
        openDeleteWindow(id) {
            this.artistToDelete = this.artists.find( artist => artist.artistId == id );
            this.renderDeleteWindow = true;
        },
        //Closing upload popup window
        closeUploadWindow() {
            this.renderUploadWindow = false;
        },
        //Closing delete popup window
        closeDeleteWindow() {
            this.renderDeleteWindow = false;
        },
        //Deleting artist in WebApi
        deleteArtist(id) {
            axios.delete( `https://localhost:5001/Artist/${id}` )
                .then( response => {
                    response.data;
                } )
                .then( () => {
                    this.renderArtists();
                })
        }   
    },
    created() {
        this.renderArtists();
    },
    components: { 
        ArtistListItem,
        UploadArtist,
        ArtistDeleteConfirmation
    }
}
</script>