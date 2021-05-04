<template>
    <section>
        <h1>{{artistInfo.artistName}}</h1>
        <img :src="`https://localhost:5001/images/${artistInfo.image}`">
        <p>{{artistInfo.bio}}</p>
        <p>Upvote: {{artistInfo.upVote}} - Downvote: {{artistInfo.downVote}}</p>
        <h3>{{artistInfo.instrument}}</h3>
        <h3>Pris per time: {{artistInfo.price}}</h3>
    </section>
</template>

<script>
import { useRoute } from 'vue-router'
import {ref} from  'vue'
import axios from  'axios'

export default {
    setup() {    
        const artistInfo = ref();
        axios(`https://localhost:5001/artist/${useRoute().params.id}`)
            .then(response => {
                artistInfo.value = response.data
                console.log(response.data)
            });
        console.log(artistInfo.value);
        return {artistInfo}

    },
}
</script>