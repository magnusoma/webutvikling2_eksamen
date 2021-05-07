<template>
  <div class="container p-3">
    <input 
        type="button"
        :class="editBtnClass" 
        :value="editBtn" 
        v-on:click="editToggle"
    >
    
    <input 
        type="button" 
        class="btn btn-success m-3"
        v-if="editMode" value="Lagre endringer" 
        v-on:click="updateArtist"
    >

    <!--View artist in detail-->
    <artist-item 
        v-if="!editMode && artistIsInitialized"
        :key="artist.artistId"
        :artist="artist"        
    />

    <!--Component for editing artist-->
    <edit-artist
        v-if="editMode"
        :setArtistChanges="setArtistChanges"
        :setNewImage="setNewImage"
    />
  </div>  
</template>

<script>

import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import ArtistItem from '../../components/admin/ArtistItem.vue'
import EditArtist from '../../components/admin/EditArtist.vue';

export default {
    name: 'AdminArtistInfo',
    setup() {
        const artistId = useRoute().params.id;
        let artist = reactive({});
        let artistIsInitialized  = ref(false);

        //Buttons to toggle between editing and viewing artist
        let editBtn = ref("Rediger artist");
        let editBtnClass = ref("btn btn-dark");
        let editMode = ref(false);        
        
        //Holds artist and image changes
        let updatedArtist = reactive({});
        let imageData = ref();
        

        return { 
            editMode,
            editBtn,
            editBtnClass,
            imageData,
            artistId,
            artist,
            updatedArtist,
            artistIsInitialized
            }        
    },
    methods: {
        //Get artist from WebApi
        getArtist() {
            axios.get(`https://localhost:5001/artist/${ this.artistId }`)
                .then( response => {
                this.artist = response.data;
                this.artistIsInitialized = true;
                });
        },
        //Toggle between editing and viewing artist
        editToggle() {
            this.editMode = !this.editMode;
            this.editBtn = this.editMode ? "Forkast endringer" : "Rediger artist";
            this.editBtnClass = this.editMode ? "btn btn-danger" : "btn btn-dark";
        },
        //Set changed artist values
        setArtistChanges(artistObj) {
            this.updatedArtist = artistObj;
        },
        //Set new image
        setNewImage(image) {
            this.imageData = image;
            console.log(this.imageData);
        },
        //Updateing artist in WebApi
        updateArtist() {
            axios.put("https://localhost:5001/artist", this.updatedArtist)
                .then( response => {
                    this.artist = response.data;
                })
                .then( () => {
                    //Updating artist image
                    if(this.imageData){
                        axios(
                            {
                                method: "POST",
                                url: "http://localhost:5001/SaveImage",
                                data: this.imageData,
                                config: { headers: { "Content-Type" : "multipart/form-data"} }
                            }
                        )
                    }
                    this.editToggle();
                })
        }
    },
    created() {
        this.getArtist();
    },
    components: { 
        ArtistItem,
        EditArtist 
    }
}
</script>