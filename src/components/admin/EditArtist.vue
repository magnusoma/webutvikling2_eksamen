<template>
    <article v-if="artistIsInitialized">        
        <label for="artistName">Artist navn:</label>
        <input 
            id="artistName"
            type="text" 
            v-model="artist.artistName" 
            @change="setArtistChanges(artist)"
        >
        
        <label for="image-upload">Endre bilde</label>
        <input 
            id="image-upload" 
            type="file" 
            @change="
                changeImage($event), 
                setNewImage( getImageData() )
            "
        >

        <img :src="`https://localhost:5001/images/artist_images/${artist.image}`" :alt="artist.artistName">

        <label for="price">Pris per time:</label>
        <input
            id="price" 
            type="number" 
            v-model="artist.price" 
            @change="setArtistChanges(artist)"
        >

        <label for="instrument">Spiller:</label>
        <select
            id="instrument" 
            v-model="artist.instrument"
            @change="setArtistChanges(artist)"
        >
            <option value="Vokalist">Vokalist</option>
            <option value="Gitarist">Gitarist</option>
            <option value="Pianoist">Pianoist</option>
        </select>

        <label for="bio">Bio</label>
        <textarea
            id="bio" 
            cols="30" 
            rows="10"
            v-model="artist.bio"
            @change="setArtistChanges(artist)"
        />
        <p>{{ artist.upVote }}</p>
        <p>{{ artist.downVote }}</p>
        
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