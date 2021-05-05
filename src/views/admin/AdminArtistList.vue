<template>
    <admin-navbar/>

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