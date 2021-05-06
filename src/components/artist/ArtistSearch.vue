<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Søk etter artist:</span>
                    <input type="text" class="form-control" v-model="searchInput" placeholder="Navn" aria-label="Navn" aria-describedby="addon-wrapping">
                    <button class="btn btn-outline-secondary" type="button" @click="searchArtist(searchInput)" id="button-addon2"><i class="fas fa-search"></i></button>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Sjanger</option>
                    <option value="1">Pop</option>
                    <option value="2">Rock</option>
                    <option value="3">Hip-hop</option>
                </select>
            </div>
        </div>
        <p>{{searchInput}}</p>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    props: {
        searchArtist: Function
    },
    setup() {
        let searchInput = ref();

        return {searchInput}
    }
    
}
</script>