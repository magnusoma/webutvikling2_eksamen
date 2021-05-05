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

        <input type="button" value="Legg til" @click="uploadArtist(), hideUploadArtist()">
    </form>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'

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

        //Append image to Form Data object and image name to artist object
        const setImage = ( e ) => {
            data.append("file", e.target.files[0]);
            newArtist.image = e.target.files[0].name;
            //imageSrc.value = e.target.files[0]
        }

        //Uploading artist object and artist image to web api
        const uploadArtist = () => {
            axios.post( "https://localhost:5001/artist/", newArtist )
                .then( () => {
                    axios(
                        {
                            method: "POST",
                            url: "https://localhost:5001/artist/SaveImage",
                            data: data,
                            config: { headers: { "Content-Type" : "multipart/form-data" } }
                        }
                    )
                })
        }

        return {
            newArtist,
            setImage,
            uploadArtist
        }
    },
    props: {
        hideUploadArtist: {
            type: Function
        }
    }
}
</script>