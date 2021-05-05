<template>
    
    <tr class="" @click="showMore = !showMore">
        <td v-if="isFinished"><i class="far fa-check-square fs-3"></i></td>
        <td v-if="!isFinished"><i class="fas fa-plus-square fs-3"></i></td>
        <th scope="row">{{id}}</th>
        <td>{{lastName + ", " + firstName}}</td>
        <td>{{genre}}</td>
        <td>{{date}}</td>
    </tr>
    <job-item-description
        v-if="showMore" 
            :id="id"
            :firstName="firstName"
            :lastName="lastName"
            :tlf="tlf"
            :description="description"
            :genre="genre"
            :email="email"
            :price="price"
            :eventType="eventType"
            :address="address"
            :date="date"
            :isFinished="isFinished"
            :changeStatus="changeStatus"
            :deleteJob="deleteJob"
        />
</template>

<script>

import JobItemDescription from './JobItemDescription.vue';
import {ref} from 'vue';

export default {
    props: {
        id: Number,
        firstName: String,
        lastName: String,
        tlf: String,
        email: String,
        description: String,
        genre: String,
        price: String,
        eventType: String,
        address: String,
        date: String,
        isFinished: Boolean,
        changeStatus: Function,
        deleteJob: Function
    },
    components: {JobItemDescription},
    setup() {
        let showMore = ref(false);
        return {showMore}
    },
}
</script>

<style scoped>

.fa-plus-square {
    color: #EBB64B;
}
.fa-check-square {
    color: #02BA1E;
}

</style>