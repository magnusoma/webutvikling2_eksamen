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

export default {
    name: 'AdminArtistList',
    setup() {
        
    }, components: {
        AdminNavbar,
        ArtistList
    }
}
</script>