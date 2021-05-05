<template>
    <section 
    class=
        "
            position-fixed
            border
            border-5
            border-dark
            bg-info
        "
    >
        <i class="fas fa-times" @click="closeUploadWindow"></i>
        <upload-artist-form
        :uploadArtist="uploadArtist"
        />
    </section>
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