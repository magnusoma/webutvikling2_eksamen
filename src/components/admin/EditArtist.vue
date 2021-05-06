<template>
    <article v-if="artistIsInitialized">
        <div class="container">
            <div class="row p-1 justify-content-center">
                <div class="col-4 p-1 ">
                    <img class="w-100 p-1" style="right: 0;" :src="`https://localhost:5001/images/artist_images/${artist.image}`" :alt="artist.artistName">
                    <label for="image-upload">Endre bilde: </label>
                <input 
                    id="image-upload"
                    type="file"
                    @change="
                        changeImage($event),
                        setNewImage( getImageData() )
                    "
                >
                </div>
                <div class="col-4 p-3">
                    <div class="form-group row">
                        <div class="col-auto p-3">
                            <label for="artistName">Artist navn:</label>
                            <input 
                                type="text" 
                                id="artistName"
                                class="form-control" 
                                v-model="artist.artistName"
                                @change="setArtistChanges(artist)"
                            >

                            <label for="price">Pris per time:</label>
                            <input 
                                id="price"
                                type="number"
                                class="form-control" 
                                v-model="artist.price"
                                @change="setArtistChanges(artist)"
                            >
                        </div>
                    </div>
                    <label for="instrument">Spiller:</label>
                    <select
                        id="instrument"
                        class="btn btn-secondary dropdown-toggle"
                        v-model="artist.instrument"
                        @change="setArtistChanges(artist)"
                    >
                        <option value="Vokalist">Vokalist</option>
                        <option value="Gitarist">Gitarist</option>
                        <option value="Pianoist">Pianist</option>
                        <option value="DJ">DJ</option>
                    </select>
                    <h3>Bio</h3>
                    <textarea v-model="artist.bio" cols="30" rows="10"></textarea>
                </div>
            </div>
            
        </div>   
    </article>  
</template>

<script>
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
    name: 'EditArtist',
    setup() {
        //Holds image file
        let data = new FormData();
        
        let artist = reactive({});
        let artistIsInitialized = ref(false);

        return { 
            data,
            artist,
            artistIsInitialized
            }
    },
    methods: {
        //Get artist from WebApi
        getArtist() {
            axios.get(`https://localhost:5001/artist/${ useRoute().params.id }`)
                .then( response => {
                this.artist = response.data;
                this.artistIsInitialized = true;
                });
        },
        //Append image to data if image changes
        changeImage ( e ) {
            this.data.append("file", e.target.files[0]);
            this.artist.image = e.target.files[0].name;
            console.log(this.data);
        },
        //Returns data
        getImageData() {
            return this.data;
        }
    },
    created() {
        this.getArtist();
    },
    props: {
        //Sending artist to parent on change
        setArtistChanges: {
            type: Function
        },
        //Sending image file to parent on change
        setNewImage: {
            type: Function
        }
    }
}
</script>

<style scoped>
*{
    font-family: 'Roboto Condensed', sans-serif;
    text-align: left;
}

</style>