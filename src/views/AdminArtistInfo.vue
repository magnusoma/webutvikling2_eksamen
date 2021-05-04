<template>
    <input type="button" :value="editBtn" v-on:click="editToggle">
    <!--<input type="button" 
    v-if="editMode" value="Lagre endringer" 
    v-on:click="$refs.editArtist.updateArtist">-->


    <artist-item v-if="!editMode"/>
    <edit-artist 
    :editToggle="editToggle"
    v-if="editMode"
    />
</template>

<script>

import ArtistItem from '../components/admin/ArtistItem.vue'
import { ref } from 'vue'
import EditArtist from '../components/admin/EditArtist.vue';

export default {
    navn: 'ArtistList',
    setup() {

        let editBtn = ref("Rediger artist");
        let editMode = ref(false);

        const editToggle = () => {
            editMode.value = !editMode.value;
            editBtn.value = editMode.value ? "Forkast endringer" : "Rediger artist";
        }

        

        return { editMode, editBtn, editToggle }        
    },
    components: { 
        ArtistItem,
        EditArtist 
    }
}
</script>