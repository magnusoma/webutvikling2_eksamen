<template>
    <admin-navbar/>
        
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