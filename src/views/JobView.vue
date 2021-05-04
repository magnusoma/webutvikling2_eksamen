<template>
    <section>
        <form>
            <div class="mb-3 row">
                <div class="col">
                    <label for="first-name-input" class="form-label">Fornavn:</label>
                    <input v-model="jobInquire.customerFirstName" type="text" class="form-control" id="first-name-input" required>
                </div>
                <div class="col">
                    <label for="last-name-input" class="form-label">Etternavn:</label>
                    <input v-model="jobInquire.customerLastName" type="text" class="form-control" id="last-name-input" required>
                </div>
            </div>
            <div class="mb-3 row" id="general-info-container">
                <div class="col">
                    <label for="customer-email-input" class="form-label">Din e-postadresse:</label>
                    <input v-model="jobInquire.customerEmail" type="email" class="form-control" id="customerEmail" aria-describedby="emailHelp" required>
                </div>
                <div class="col">
                    <label for="tlf-input" class="form-label">Telefonnummer:</label>
                    <input v-model="jobInquire.customerTlf" type="text" class="form-control" id="tlf-input" required>
                </div>
            </div>
            <div id="genre-eventtype-container" class="row">
                <div class="col">
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
                <div class="col">
                    <label for="genre-select">Ønsket sjanger:</label>
                    <select v-model="jobInquire.genre" name="genre" id="genre-select" required>
                        <option value="null" disabled>Velg...</option>
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                        <option value="Hip-hop">Hip-Hop</option>
                        <option value="Rap">Rap</option>
                    </select>
                </div>
            </div>
            <div id="description-container">
                <label for="description-textarea">Fortell oss mer om arrangementet:</label>
                <textarea v-model="jobInquire.description" id="description-textarea" cols="30" rows="10"></textarea>
            </div>
            <div id="price-date-address-container" class="row">
                <div class="col">
                    <label for="price-input" class="form-label">Ønsket pris:</label>
                    <input v-model="jobInquire.price" type="text" class="form-control" id="price-input" required>
                </div>
                <div class="col">
                    <label for="datepicker">Arrangement dato:</label>
                    <input v-model="jobInquire.date" type="date" id="datepicker" required>
                </div>
                <div class="col">
                    <label for="job-address">Adresse for arrangement:</label>
                    <input v-model="jobInquire.jobAddress" type="text" id="job-address" required>
                </div>  
            </div>
            <input type="submit" @click="postInquire" class="btn btn-primary" value="Send inn">
            <p>{{jobInquire}}</p>
        </form>
    </section>
</template>

<script>

import {reactive} from 'vue'
import axios from 'axios'

//Set min and max date for datepicker
/*
let date = new Date();

date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
//document.getElementById("datepicker").min = date;

console.log(date);

*/


export default {
    setup() {
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
            axios.post("https://localhost:5001/job", jobInquire);
        }

        return {jobInquire, postInquire}
        
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