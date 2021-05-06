<template>
<input type="submit" class="btn btn-primary" value="Lagre endringer" v-on:click="updateArtist(), editToggle()">
    <article>
        <div class="container">
            <div class="row p-1 justify-content-center">
                <div class="col-4 p-1 ">
                    <img class="w-100 p-1" style="right: 0;" :src="`https://localhost:5001/images/artist_images/${artist.image}`" :alt="artist.artistName">
                    <label for="image-upload">Endre bilde: </label>
                <input @change="changeImage" type="file" id="image-upload">
                </div>
                <div class="col-4 p-3">
                    <div class="form-group row">
                        <div class="col-auto p-3">
                            <label for="">Artist navn:</label>
                            <input type="text" class="form-control" v-model="artist.artistName">
                            <label for="">Pris per time:</label>
                            <input type="number" class="form-control" v-model="artist.price">
                        </div>
                    </div>
                    <label for="">Spiller:</label>
                    <select class="btn btn-secondary dropdown-toggle" v-model="artist.instrument">
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
import axios from 'axios'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export default {
    name: 'EditArtist',
    setup() {
        const artistId = useRoute().params.id;
        let data = new FormData();
        let imageSrc = ref();
        let artist = ref([]);

        axios.get(`https://localhost:5001/artist/${ artistId }`)
            .then( response => {
                artist.value = response.data;
            });

        const changeImage = ( e ) => {
            data.append("file", e.target.files[0]);
            artist.value.image = e.target.files[0].name;
            imageSrc.value = e.target.files[0]
            console.log(artist.value);
        }

        const updateArtist = () => {
            const updatedArtist = {
                artistId: parseInt(artist.value.artistId),
                artistName: artist.value.artistName,
                price: parseFloat(artist.value.price),
                image: artist.value.image,
                bio: artist.value.bio,
                upVote: parseInt(artist.value.upVote),
                downVote: parseInt(artist.value.downVote),
                instrument: artist.value.instrument
            }
            axios.put("https://localhost:5001/artist", updatedArtist)
                .then( response => {
                    /*axios(
                        {
                            method: "POST",
                            url: "http://localhost:5001/SaveImage",
                            data: data,
                            config: { headers: { "Content-Type": "multipart/form-data"} }
                        }
                    )*/
                    artist.value = response.data;
                })
            
        }


        return { artist, changeImage, updateArtist }
    },
    props: {
        editToggle: Function
    }
}
</script>

<style scoped>
*{
    font-family: 'Roboto Condensed', sans-serif;
    text-align: left;
}

</style>