<template>
    <tr class="table-secondary table-active">
        <th class="col">Telefon</th>
        <th class="col">Pris</th>
        <th class="col">Type arrangement</th>
        <th class="col">Adresse</th>
        <th colspan="2" class="col">E-post</th>
    </tr>
    <tr class="table-light table-active">
        <td scope="row">{{tlf}}</td>
        <td>{{price}}</td>
        <td>{{eventType}}</td>
        <td>{{jobAddress}}</td>
        <td colspan="2">{{email}}</td>
    </tr>
    <tr class="table-secondary table-active">
        <th scope="row">Beskrivelse:</th>
        <td colspan="5">{{description}}</td>
    </tr>
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
}
</script>