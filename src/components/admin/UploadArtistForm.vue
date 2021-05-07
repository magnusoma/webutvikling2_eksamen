<template>
    <form @submit.prevent="uploadArtist( newArtist, getImageData() )">
        <div class="form-group">
            <label for="artistName">Artist navn: </label>
            <input class="form-control m-2" type="text" id="artistName" v-model="newArtist.artistName" required>
        </div>

        <div class="form-group">
            <label for="image-upload">Velg bilde:</label>
            <input @change="setImage" type="file" id="image-upload" required>
            <img class="w-100 p-1" :src="imgSrc" :alt="newArtist.artistName">
        </div>
        
        <div class="form-group">
        <label for="instrument">Instrument: </label>
        <select class="btn btn-primary dropdown-toggle m-2" id="instrument" v-model="newArtist.instrument" required>
            <option value="Vokalist">Vokalist</option>
            <option value="Gitarist">Gitarist</option>
            <option value="Pianist">Pianist</option>
            <option value="DJ">DJ</option>
            <option value="Trommeslager">Trommeslager</option>
            <option value="Tuba">Tuba</option>
            <option value="Trompet">Trompet</option>
            <option value="Fløyte">Fløyte</option>
        </select>
        </div>
        
        <div class="form-group">
            <label for="bio">Biografi:</label>
            <textarea class="form-control m-2" id="bio" cols="30" rows="10" v-model="newArtist.bio" required></textarea>
        </div>
        
        <div class="form-group">
            <label for="price">Pris per time:</label>
            <input class="form-control m-2" type="number" id="price" v-model="newArtist.price" required>
            <!--Calling uploadArtist method passing artist object and image as argument-->
            <input type="submit" class="btn btn-primary m-2" value="Legg til">
        </div>
    </form>
</template>

<script>
import { ref, reactive } from 'vue'

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
        let imgSrc = ref('#');

        return {
            newArtist,
            data,
            imgSrc
        }
    },
    methods: {
        //Append image to Form Data object and image name to artist object
        setImage( e ) {
            this.data.append("file", e.target.files[0]);
            this.imgSrc = URL.createObjectURL(e.target.files[0]);
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

<style scoped>
label{
    font-family: 'Roboto Condensed', sans-serif;
    color: rgb(0, 0, 0);
    
}
</style>