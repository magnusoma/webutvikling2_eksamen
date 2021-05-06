<template>
    <table v-if="windowLoaded" class="table table-hover table-bordered">
        <thead>
        <tr class="">
            <th scope="col" class="col" @click="sortJob('isFinished')">Status 
                <i v-if="activeSort == 'isFinished'" class="fas fa-angle-up"></i>
            </th>
            <th scope="col" class="col" @click="sortJob('id')">#
                <i v-if="activeSort == 'id'" class="fas fa-angle-up"></i>
            </th>
            <th scope="col" class="col" @click="sortJob('name')" id="name">Navn
                <i v-if="activeSort == 'name'" class="fas fa-angle-up"></i>
            </th>
            <th scope="col" class="col" @click="sortJob('genre')">Sjanger
                <i v-if="activeSort == 'genre'" class="fas fa-angle-up"></i>
            </th>
            <th scope="col" class="col" @click="sortJob('date')">Dato
                <i v-if="activeSort == 'date'" class="fas fa-angle-up"></i>
            </th>
        </tr>
        </thead>
        <tbody v-for="job in jobList" :key="job.id">
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
        let activeSort = ref("id");
        let windowLoaded = ref(false);

        return {jobList, jobToUpdate, activeSort, windowLoaded}
    },
    
    methods: {
        renderJobs() {
            axios("https://localhost:5001/job")
            .then(response => {
                this.jobList = response.data;
            });
        },

        sortJob(sort) {
            this.activeSort = sort;
            switch(sort) {
                case "isFinished":                  
                    this.jobList.sort((a,b) => new Date(a.date) < new Date(b.date) ? 1 : -1)
                    this.jobList.sort(((a,b) => a.isFinished < b.isFinished ? 1 : -1));
                    break;
                case "name":
                    this.jobList.sort((a,b) => new Date(a.date) < new Date(b.date) ? 1 : -1)
                    this.jobList.sort((a,b) => a.customerLastName.localeCompare(b.customerLastName));
                    break;
                case "id":
                    this.jobList.sort((a,b) => a.id > b.id ? 1 : -1);
                    break;
                case "genre":
                    this.jobList.sort((a,b) => a.genre.localeCompare(b.genre));
                    break;
                case "date":
                    this.jobList.sort((a,b) => new Date(a.date) < new Date(b.date) ? 1 : -1);
                    break;
            }

        },

        changeStatus(id) {
            this.jobToUpdate = this.jobList.find(job => job.id == id);
            this.jobToUpdate.isFinished = !this.jobToUpdate.isFinished;
            axios.put("https://localhost:5001/job", this.jobToUpdate);
        },
        deleteJob(id) {
            axios.delete(`https://localhost:5001/job/${id}`)
                .then(response => {
                    response;
                })
                .then( () => {
                    this.renderJobs();
                })
        }
    },
    created() {
        this.renderJobs();
        this.windowLoaded = true;
    },


}
</script>

<style scoped>
.col:hover {
    background-color: #f5f5f5;;
    cursor: pointer;
}
</style>