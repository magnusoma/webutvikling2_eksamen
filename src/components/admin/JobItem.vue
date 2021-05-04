<template>
    <td v-if="isFinished"><i class="far fa-check-square fs-3"></i></td>
    <td v-if="!isFinished"><i class="fas fa-plus-square fs-3"></i></td>
    <th scope="row">{{id}}</th>
    <td>{{lastName + ", " + firstName}}</td>
    <td>{{genre}}</td>
    <td>{{date}}</td>
    <td class="p-1"><button type="button" class="btn btn-outline-primary">Se mer</button></td>
</template>

<script>
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
    setup() {
        
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