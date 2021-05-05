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
        <i class="fas fa-times" @click="hideUploadArtist"></i>
        <upload-artist-form
        :hideUploadArtist="hideUploadArtist"
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
        hideUploadArtist: {
            type: Function
        }
    }
}
</script>