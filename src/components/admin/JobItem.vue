<template>
    <th scope="row">{{id}}</th>
    <td>{{lastName + "," + firstName}}</td>
    <td>{{genre}}</td>
    <td>{{Dato}}</td>
    <td><button type="button" class="btn btn-secondary">Secondary</button></td>
</template>

<script>
export default {
    props: {
        id: int,
        firstName: String,
        lastName: String,
        tlf: String,
        email: String,
        description: String,
        genre: String,
        price: int,
        eventType: String,
        address: String,
        date: String,
        isFinished: Boolean,
    },
    setup() {
        
    },
}
</script>