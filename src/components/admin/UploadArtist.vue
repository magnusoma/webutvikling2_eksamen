<template>
    <div class="row justify-content-center">
    <section 
    class="position-fixed bg-light border border-1 border-dark rounded-3 w-25"
    >
        <i class="fas fa-times" @click="closeUploadWindow"></i>
        <upload-artist-form
        :uploadArtist="uploadArtist"
        />
    </section>
    </div>
</template>

<script>
import UploadArtistForm from './UploadArtistForm.vue'
export default {
    name: 'UploadArtist',
    setup() {
                
    },
    components: { 
        UploadArtistForm 
    },
    props: {
        closeUploadWindow: {
            type: Function
        },
        uploadArtist: {
            type: Function
        }
    }
}
</script>

<style scoped>
label{
    font-family: 'Roboto Condensed', sans-serif;
    color: rgb(0, 0, 0);
}
.fa-times{
    position: absolute;
    left: 0.5em;
    top: 0.5em;
}
section{
    z-index: 3;
}
</style>