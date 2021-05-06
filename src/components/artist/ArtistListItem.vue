<template>
    <article class="card border-0 col-lg-4 col-mg-4 col-sm-4 pt-4 px-4">
        <img class="artist-image card-img-top" :src="`https://localhost:5001/images/artist_images/${artist.image}`">
        <div class="card-body">
             <router-link :to="{name: 'ArtistView', params:  {
            id: artist.artistId}}">
            <h3>{{artist.artistName}}</h3>
            </router-link>

            <i
                class="fas fa-thumbs-up"
                @click="upVoteArtist"
            />
            <p>{{ artist.upVote }}</p>

            <i 
                class="fas fa-thumbs-down"
                @click="downVoteArtist"
            />
            <p>{{ artist.downVote }}</p>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        artist: {
            type: Object
        },
        updateArtist: {
            type: Function
        }
    },
    methods: {
        upVoteArtist() {
            //let voteObj = this.getVoteList().find( i => i.artistId == this.artist.artistId);
            
            let artistObj = this.artist;
            artistObj.upVote++;
            //window.localStorage.setItem('productList', JSON.stringify(voteList));
            this.updateArtist(artistObj);
        },
        downVoteArtist() {
            let artistObj = this.artist;
            artistObj.downVote ++;
            this.updateArtist(artistObj);
        },
        /*alreadyVoted() {
            //let voteList = JSON.parse(localStorage.getItem('voteList')) || [];
        },
        getVoteList() {
            return JSON.parse(localStorage.getItem('voteList')) || [];
        }*/
        
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
h3, p, a {
    font-family: 'Roboto Condensed', sans-serif;
    text-decoration: none;
    color:black;
}

</style>