<template>
    <input type="button" value="Edit" v-on:click="editMode = !editMode">
    <artist-item v-if="!editMode"/>
    <edit-artist v-if="editMode"/>      
</template>

<script>

import ArtistItem from '../components/admin/ArtistItem.vue'
import { ref } from 'vue'
import EditArtist from '../components/admin/EditArtist.vue';

export default {
    navn: 'ArtistList',
    setup() {

        let editMode = ref(false);

        return { editMode }        
    },
    components: { 
        ArtistItem,
        EditArtist 
    }
}
</script>