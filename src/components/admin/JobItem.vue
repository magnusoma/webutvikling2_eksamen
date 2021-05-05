<template>
    
    <tr class="" @click="showMore = !showMore">
        <td v-if="isFinished"><i class="far fa-check-square fs-3"></i></td>
        <td v-if="!isFinished"><i class="fas fa-plus-square fs-3"></i></td>
        <th scope="row">{{id}}</th>
        <td>{{lastName + ", " + firstName}}</td>
        <td>{{genre}}</td>
        <td>{{date}}</td>
        <td class="p-1">
            <button v-if="!isFinished" type="button" class="btn btn-outline-primary">Fullfør</button>
        </td>
    </tr>
    <job-item-description
        v-if="showMore" 
            :id="id"
            :firstName="firstName"
            :lastName="lastName"
            :tlf="tlf"
            :description="description"
            :genre="genre"
            :price="price"
            :address="jobAddress"
            :date="date"
            :isFinished="isFinished"
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
        price: Number,
        eventType: String,
        address: String,
        date: String,
        isFinished: Boolean,
    },
    components: {JobItemDescription},
    setup() {
        let showMore = ref(false);
        return {showMore}
        /*
        const changeStatus = (status) => {
            const job = {
                customerEmail: email,
                customerFirstName: firstName,
                customerLastName: lastName,
                customerTlf: tlf,
                description: description,
                genre: genre,
                jobAddress: "",
                eventType: "null",
                price: "",
                date:"",
                isFinished: status 
            } 

        }
        */
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