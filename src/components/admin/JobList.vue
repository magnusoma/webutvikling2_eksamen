<template>
    <input type="button" @click="sortJob('isFinished')">
    <input type="button" @click="sortJob('genre')">
    <table class="table table-hover">
        <thead>
        <tr class="">
            <th scope="col" @click="sortJob('isFinished')">Status</th>
            <th scope="col">#</th>
            <th scope="col" @click="sortJob('name')">Navn</th>
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
        sortJob(sort) {
            switch(sort) {
                case "isFinished":                  
                    this.jobList.sort((a,b) => new Date(a.date) < new Date(b.date) ? 1 : -1)
                    this.jobList.sort(((a,b) => a.isFinished < b.isFinished ? 1 : -1));
                    break;
                case "name":
                    this.jobList.sort((a,b) => new Date(a.date) < new Date(b.date) ? 1 : -1)
                    this.jobList.sort(
                        (a,b) => a.customerLastName.localeCompare(b.customerLastName)
                    );
            }
        },
//return reviewList.sort((a,b) => a.reviewStars < b.reviewStars ? 1 : -1);
//reviewList.sort( (a,b) => new Date(b.reviewDate) - new Date(a.reviewDate));
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