<template>
    <admin-navbar/>
    <upload-artist/>
    <artist-list/>
</template>

<script>
import AdminNavbar from '../../components/admin/AdminNavbar'
import ArtistList from '../../components/admin/ArtistList'
import UploadArtist from '../../components/admin/UploadArtist.vue'
export default {
    setup() {
        
    }, components: {
        AdminNavbar,
        ArtistList,
        UploadArtist
    }
}
</script>