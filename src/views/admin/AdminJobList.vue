<template>
    <admin-navbar/>
    <section>
        <h1>Oppgrag</h1>
    </section>
    <admin-job-list/>
    
</template>

<script>
import AdminNavbar from '/src/components/admin/AdminNavbar.vue'
import AdminJobList from '/src/components/admin/JobList.vue'

export default {
    components: {
        AdminNavbar,
        AdminJobList
    }
}
</script>