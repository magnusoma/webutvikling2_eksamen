<template>
    <form>
        <label for="artistName">Artist Name:</label>
        <input type="text" id="artistName" v-model="newArtist.artistName">

        <label for="image-upload">Velg bilde</label>
        <input @change="setImage" type="file" id="image-upload">

        <label for="instrument">Instrument</label>
        <select id="instrument" v-model="newArtist.instrument">
            <option value="Vokalist">Vokalist</option>
            <option value="Gitarist">Gitarist</option>
            <option value="Pianoist">Pianoist</option>
        </select>

        <label for="bio">Biografi</label>
        <textarea id="bio" cols="30" rows="10" v-model="newArtist.bio"></textarea>

        <label for="price">Pris per time</label>
        <input type="number" id="price" v-model="newArtist.price">

        <!--Calling uploadArtist method passing artist object and image as argument-->
        <input type="button" class="btn btn-dark" value="Legg til" @click="uploadArtist( newArtist, getImageData() )">
    </form>
</template>

<script>
import { reactive } from 'vue'

export default {
    name: 'UploadArtistForm',
    setup() {
        let newArtist = reactive({
            artistName: "",
            price: "",
            image: "",
            bio: "",
            upVote: 0,
            downVote: 0,
            instrument: ""
        });
        
        let data = new FormData();

        return {
            newArtist,
            data
        }
    },
    methods: {
        //Append image to Form Data object and image name to artist object
        setImage( e ) {
            this.data.append("file", e.target.files[0]);
            this.newArtist.image = e.target.files[0].name;
        },
        //Getting form data containing image file
        getImageData() {
            return this.data;
        }
    },
    props: {
        uploadArtist: {
            type: Function
        }
    }
}
</script>