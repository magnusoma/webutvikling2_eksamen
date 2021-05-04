<template>

<p>{{jobList}}</p>
<p>Heisann</p>
    
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';

export default {
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