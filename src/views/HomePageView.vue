<template>
    <section class="row">
        <article class="col-xs-12 col-sm-8 col-md-6" v-for="(artist, i) in artistList" :key="i">
            <router-link :to="{name: 'ArtistView', params:  {
                id: artist.artistId,
                name: artist.artistName}}">
            <h3>{{artist.artistName}}</h3>
            </router-link>
            <p>{{artist.upVote}}</p>
            <p>{{artist.downVote}}</p>
            <img :src="`https://localhost:5001/images/${artist.image}`">
        </article>
    </section>
</template>

<script>

import axios from 'axios'
import {ref} from 'vue'

export default {
    setup() {
        const artistList = ref();
        axios("https://localhost:5001/artist")
            .then(response => {
                artistList.value = response.data
                console.log(response.data)
            });
        console.log(artistList.value);
        return {artistList}
    }
}
</script>