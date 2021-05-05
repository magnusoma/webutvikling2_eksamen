<template>
    <table class="table table-hover">
        <thead>
        <tr class="">
            <th scope="col">Status</th>
            <th scope="col">#</th>
            <th scope="col">Navn</th>
            <th scope="col">Sjanger</th>
            <th scope="col">Dato</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody v-for="(job, i) in jobList" :key="i">
            <job-item
                :id="job.id"
                :firstName="job.customerFirstName"
                :lastName="job.customerLastName"
                :tlf="job.customerTlf"
                :description="job.description"
                :genre="job.genre"
                :price="job.price"
                :address="job.jobAddress"
                :date="job.date"
                :isFinished="job.isFinished"
            />

        </tbody>
    </table>
    
</template>

<script>

import {ref} from 'vue';
import axios from 'axios';
import JobItem from './JobItem.vue';


export default {
  components: { JobItem },
    setup() {
        const jobList = ref();
        axios("https://localhost:5001/job")
            .then(response => {
                jobList.value = response.data
            });

        return {jobList}
    }, 
}
</script>