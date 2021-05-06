<template>
    <tr class="table-secondary table-active">
        <th class="col">E-post</th>
        <th class="col">Pris</th>
        <th class="col">Type arrangement</th>
        <th class="col">Adresse</th>
        <th class="col">Telefon</th>
        
    </tr>
    <tr class="table-light table-active">
        <td scope="row">{{email}}</td>
        <td>{{price}}</td>
        <td>{{eventType}}</td>
        <td>{{address}}</td>
        <td>{{tlf}}</td>
    </tr>
    <tr class="table-secondary table-active">
        <th scope="row">Beskrivelse:</th>
        <td colspan="3">{{description}}</td>
        <td>
            <button v-if="!isFinished" @click="changeStatus(id)" type="button" class="btn btn-success btn-sm m-1">Fullfør oppgave</button>
            <button v-if="isFinished" @click="changeStatus(id)" type="button" class="btn btn-warning btn-sm m-1">Fjern "Fullført"</button>
            <button @click="deleteJobBtn" type="button" id="deleteBtn" 
                :class="toggelDeleteBtn ? 'btn btn-warning btn-sm m-1' : 'btn btn-danger btn-sm m-1'">
                Slett oppdrag</button>
            <button v-if="toggelDeleteBtn" @click="deleteJob(id)" type="button" class="btn btn-danger btn-sm m-1">Slett oppdrag</button>
        </td>
    </tr>
</template>

<script>
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
        changeStatus: Function,
        deleteJob: Function
    },
    setup() {
        let toggelDeleteBtn = ref(false);

        return {toggelDeleteBtn}
    },
    methods: {
        deleteJobBtn() {
            this.toggelDeleteBtn = !this.toggelDeleteBtn;
            if (this.toggelDeleteBtn) {
                document.getElementById("deleteBtn").innerHTML = "Angre";
            }
            else {
                document.getElementById("deleteBtn").innerHTML = "Slett oppdrag";
            }
        }
    }
}
</script>