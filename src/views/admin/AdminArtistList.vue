<template>
    <admin-navbar/>
    <input type="button" class="btn btn-dark" value="Legg til ny musiker" @click="showUploadArtist = true">
    
    <upload-artist
    v-if="showUploadArtist"
    :hideUploadArtist="hideUploadArtist"
    />

    <artist-list/>
</template>

<script>
import AdminNavbar from '../../components/admin/AdminNavbar'
import ArtistList from '../../components/admin/ArtistList'
import UploadArtist from '../../components/admin/UploadArtist.vue'
import { ref } from 'vue'

export default {
    setup() {
        let showUploadArtist = ref(false);

        const hideUploadArtist = () => showUploadArtist.value = false;

        return {
            showUploadArtist,
            hideUploadArtist
        }
        
    }, components: {
        AdminNavbar,
        ArtistList,
        UploadArtist
    }
}
</script>