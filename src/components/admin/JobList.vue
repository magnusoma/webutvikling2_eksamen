<template>
    <table class="table table-hover">
        <thead>
        <tr class="">
            <th scope="col">Status</th>
            <th scope="col">#</th>
            <th scope="col">Navn</th>
            <th scope="col">Sjanger</th>
            <th scope="col">Dato</th>
        </tr>
        </thead>
        <tbody v-for="(job, i) in jobList" :key="i">
            <job-item
                :id="job.id"
                :firstName="job.customerFirstName"
                :lastName="job.customerLastName"
                :tlf="job.customerTlf"
                :description="job.description"
                :email="job.customerEmail"
                :genre="job.genre"
                :price="job.price"
                :eventType="job.eventType"
                :address="job.jobAddress"
                :date="job.date"
                :isFinished="job.isFinished"
                :changeStatus="changeStatus"
                :deleteJob="deleteJob"
            />

        </tbody>
    </table>
    
</template>

<script>

import {reactive, ref} from 'vue';
import axios from 'axios';
import JobItem from './JobItem.vue';


export default {
  components: { JobItem },
    setup() {
        let jobList = ref([]);
        let jobToUpdate = reactive({});

        axios("https://localhost:5001/job")
            .then(response => {
                jobList.value = response.data;
            });

        return {jobList, jobToUpdate}
    },
    
    methods: {
        changeStatus(id) {
            this.jobToUpdate = this.jobList.find(job => job.id == id);
            this.jobToUpdate.isFinished = !this.jobToUpdate.isFinished;
            axios.put("https://localhost:5001/job", this.jobToUpdate);
        },
        deleteJob(id) {
            axios.delete(`https://localhost:5001/job/${id}`);
        }
    }

}
</script>