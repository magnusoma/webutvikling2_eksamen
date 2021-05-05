<template>
    <form :action="postInquire" class="row g-3" v-show="!postSuccess">
        <div class="col-md-6">
            <label for="first-name-input" class="form-label">Fornavn:</label>
            <input v-model="jobInquire.customerFirstName" type="text" class="form-control" id="first-name-input" required>
        </div>
        <div class="col-md-6">
            <label for="last-name-input" class="form-label">Etternavn:</label>
            <input v-model="jobInquire.customerLastName" type="text" class="form-control" id="last-name-input" required>
        </div>
        <div class="col-md-6">
            <label for="customer-email-input" class="form-label">Din e-postadresse:</label>
            <input v-model="jobInquire.customerEmail" type="email" class="form-control" id="customerEmail" aria-describedby="emailHelp" required>
        </div>
        <div class="col-md-6">
            <label for="tlf-input" class="form-label">Telefonnummer:</label>
            <input v-model="jobInquire.customerTlf" type="text" class="form-control" id="tlf-input" required>
        </div>
        <div class="col-md-6">
            <label for="genre-select">Type arrangement:</label>
            <select v-model="jobInquire.eventType" name="type" id="eventtype-select" required>
                <option value="null" disabled>Velg...</option>
                <option value="Fest">Fest</option>
                <option value="Pop">Konfirmasjon</option>
                <option value="Bursdag">Bursdag</option>
                <option value="Jobbfest">Jobbfest</option>
                <option value="Ball">Ball</option>
            </select>   
        </div>
        <div class="col-md-6">
            <label for="genre-select">Ønsket sjanger:</label>
            <select v-model="jobInquire.genre" name="genre" id="genre-select" required>
                <option value="null" disabled>Velg...</option>
                <option value="Rock">Rock</option>
                <option value="Pop">Pop</option>
                <option value="Hip-hop">Hip-Hop</option>
                <option value="Rap">Rap</option>
            </select>
        </div>
        <div id="description-container" class="col-md-12">
            <label for="description-textarea">Fortell oss mer om arrangementet:</label>
            <textarea v-model="jobInquire.description" id="description-textarea" cols="30" rows="10"></textarea>
        </div>
        <div class="col-md-4">
            <label for="price-input" class="form-label">Ønsket pris:</label>
            <input v-model="jobInquire.price" type="text" class="form-control" id="price-input" required>
        </div>
        <div class="col-md-4">
            <label for="datepicker">Arrangement dato:</label>
            <input v-model="jobInquire.date" type="date" id="datepicker" required>
        </div>
        <div class="col-md-4">
            <label for="job-address">Adresse for arrangement:</label>
            <input v-model="jobInquire.jobAddress" type="text" id="job-address" required>
        </div>  
        <input type="submit" class="btn btn-primary col-md-12 " value="Send inn">
    </form>
    <post-success v-if="postSuccess"/>
</template>

<script>

import {reactive, ref} from 'vue'
import axios from 'axios'
import PostSuccess from './PostSuccess.vue'

export default {
    components: {
        PostSuccess
    },
    setup() {
        let postSuccess = ref(false);
        let jobInquire = reactive({
            customerEmail: "",
            customerFirstName: "",
            customerLastName: "",
            customerTlf: "",
            description: "",
            genre: "null",
            jobAddress: "",
            eventType: "null",
            price: "",
            date:""
        });

        const postInquire = () => {
            axios.post("https://localhost:5001/job", jobInquire)
                .then(response => {
                    if(response.data) {
                        postSuccess.value = true;

                    }
                })
        }

        return {jobInquire, postInquire, postSuccess}
        
    },
}
</script>


<style scoped>

#description-textarea {
    width: 100%;
    height: 9rem;
    padding: 1rem 1rem 1rem 1rem;
}
form {
    margin-top: 3rem;
}
</style>