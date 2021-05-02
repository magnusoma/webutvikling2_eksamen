<template>
    <section>
        <b-dropdown id="dropdown-left" text="Pris" variant="primary" class="m-2">
            <b-dropdown-item href="#">Høy til lav</b-dropdown-item>
            <b-dropdown-item href="#">Lav til høy</b-dropdown-item>
            <b-dropdown-item href="#">lol</b-dropdown-item>
        </b-dropdown>
        <b-dropdown id="dropdown-right" right text="Type" variant="primary" class="m-2">
            <b-dropdown-item href="#">Vokalist</b-dropdown-item>
            <b-dropdown-item href="#">Gitarist</b-dropdown-item>
            <b-dropdown-item href="#">Pianist</b-dropdown-item>
            <b-dropdown-item href="#">Trommeslager</b-dropdown-item>
            <b-dropdown-item href="#">Pianist</b-dropdown-item>
            <b-dropdown-item href="#">lol</b-dropdown-item>
        </b-dropdown>
    </section>
</template>

<script>
export default {
    name: "FilterArtist"
}
</script>
