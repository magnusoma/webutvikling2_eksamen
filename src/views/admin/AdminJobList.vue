<template>
    <admin-navbar/>
    <admin-job-list/>
    
</template>

<script>
import AdminNavbar from '/src/components/admin/AdminNavbar.vue'
import AdminJobList from '/src/components/admin/JobList.vue'

import {ref} from 'vue';
import axios from 'axios';

export default {
    setup() {
        const jobList = ref();
        axios("https://localhost:5001/artist")
            .then(response => {
                jobList.value = response.data
            });
        return {jobList}
    }, 
    components: {
        AdminNavbar,
        AdminJobList
    }
}
</script>