<template>
  <div class="row align-items-center">
    <div class="row d-flex justify-content-center">
      <div class="col-md-auto">
        <div class="card border-0" style="width: 18rem">
          <img
            class="card-img"
            :src="`https://localhost:5001/images/artist_images/${artistInfo.image}`"
          />
          <h5 class="card-header text-dark">
            Upvote: {{ artistInfo.upVote }} - Downvote:
            {{ artistInfo.downVote }}
          </h5>
        </div>
      </div>
      <div class="col-md-auto">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem">
          <h1 class="card-header text-light">{{ artistInfo.artistName }}</h1>
          <div class="card-body text-light">
            <h4 class="card-text text-light">{{ artistInfo.instrument }}</h4>
            <p class="card-text text-light">{{ artistInfo.bio }}</p>
            <h3 class="card-header text-light">
              Pris per time: {{ artistInfo.price }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const artistInfo = ref();
    axios(`https://localhost:5001/artist/${useRoute().params.id}`).then(
      (response) => {
        artistInfo.value = response.data;
        console.log(response.data);
      }
    );
    console.log(artistInfo.value);
    return { artistInfo };
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