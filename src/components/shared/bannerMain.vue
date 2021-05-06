<template>
    <!--https://getbootstrap.com/docs/5.0/components/carousel/#with-controls -->
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="`https://localhost:5001/images/banners/astrid-banner.jpg`" class="d-block w-100" alt="banner">
        </div>
        <div class="carousel-item">
          <img :src="`https://localhost:5001/images/banners/kygo-banner.jpg`" class="d-block w-100" alt="banner">
        </div>
        <div class="carousel-item">
          <img :src="`https://localhost:5001/images/banners/seeb-banner.jpg`" class="d-block w-100" alt="banner">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>

<style scoped>
img {
    width: 100%;
}
</style>