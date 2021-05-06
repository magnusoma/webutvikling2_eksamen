<template>
  <div class="row align-items-center p-3">
    <div class="row d-flex justify-content-center">
      <div class="col-md-auto">
        <div class="card border-0" style="width: 18rem">
          <img
            class="card-img"
            :src="`https://localhost:5001/images/artist_images/${artist.image}`"
          />
          <h5 class="card-header text-dark">
            Upvote: {{ artist.upVote }} - Downvote: {{ artist.downVote }}
          </h5>
        </div>
      </div>
      <div class="col-md-auto">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem">
          <h1 class="card-header text-light">{{ artist.artistName }}</h1>
          <div class="card-body text-light">
            <h4 class="card-text text-light">{{ artist.instrument }}</h4>
            <p class="card-text text-light">{{ artist.bio }}</p>
            <h3 class="card-header text-light">
              Pris per time: {{ artist.price }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  navn: "ArtistItem",
  setup() {
    const artistId = useRoute().params.id;
    let artist = ref([]);

    /*axios.get(`https://localhost:5001/artist/${ artistId }`)
        .then( response => {
            artist.value = response.data;
        });*/

    const fetchArtist = () => {
      axios
        .get(`https://localhost:5001/artist/${artistId}`)
        .then((response) => {
          artist.value = response.data;
        });
    };

    return { artist, fetchArtist };
  },
  beforeCreate() {
    this.fetchArtist();
    console.log("Fetched artist");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
h3,
p,
h4 {
  font-family: "Roboto Condensed", sans-serif;
  text-decoration: none;
  color: black;
  text-align: left;
}
h1,
h5 {
  font-family: "Roboto Condensed", sans-serif;
}
</style>