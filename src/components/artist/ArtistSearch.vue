<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="input-group flex-nowrap" @keyup.enter="searchArtist(searchInput)">
                    <span class="input-group-text" id="addon-wrapping">Søk etter artist:</span>
                    <input type="text" class="form-control" v-model="searchInput" placeholder="Navn" aria-label="Navn" aria-describedby="addon-wrapping">
                    <button class="btn btn-outline-secondary" type="button" @click="searchArtist(searchInput)" id="button-addon2"><i class="fas fa-search"></i></button>
                    <button class="btn btn-outline-secondary" type="button" @click="[getArtists(), searchInput = '']" id="button-addon2"><i class="fas fa-times"></i></button>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Instrument:</span>
                    <select class="form-select" v-model="selectedFilter" @change="setFilter(selectedFilter)" aria-label="Default select example">
                        <option selected value="all">Alle</option>
                        <option value="Vokalist">Vokalist</option>
                        <option value="DJ">DJ</option>
                        <option value="Rapper">Rapper</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    props: {
        searchArtist: Function,
        getArtists: Function,
        setFilter: {
            type: Function
        }
    },
    setup() {
        let searchInput = ref();
        let selectedFilter = ref();

        return {searchInput, selectedFilter}
    }
    
}
</script>