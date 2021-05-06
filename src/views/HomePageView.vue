<template>
    <banner-main/>
    <artist-list/>
</template>

<script>

import ArtistList from '../components/artist/ArtistList.vue';
import BannerMain from '/src/components/shared/bannerMain.vue';

export default {
  components: { ArtistList, BannerMain },
    setup() {
        
    }
}
</script>