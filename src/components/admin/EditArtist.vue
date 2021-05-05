<template>
    <article>
        <input type="submit" value="Lagre endringer" v-on:click="updateArtist(), editToggle()">
        
        <label for="">Artist navn:</label>
        <input type="text" v-model="artist.artistName">
        
        <label for="image-upload">Endre bilde</label>
        <input @change="changeImage" type="file" id="image-upload">
        <img :src="`https://localhost:5001/images/artist_images/${artist.image}`" :alt="artist.artistName">

        <label for="">Pris per time:</label>
        <input type="number" v-model="artist.price">

        <label for="">Spiller:</label>
        <select v-model="artist.instrument">
            <option value="Vokalist">Vokalist</option>
            <option value="Gitarist">Gitarist</option>
            <option value="Pianoist">Pianoist</option>
        </select>

        <h3>Bio</h3>
        <textarea v-model="artist.bio" cols="30" rows="10"></textarea>
        <p>{{ artist.upVote }}</p>
        <p>{{ artist.downVote }}</p>
        
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