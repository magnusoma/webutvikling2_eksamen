import {createWebHistory, createRouter} from 'vue-router'

import AdminArtistInfo from '/src/views/AdminArtistInfo.vue'
import AdminArtistList from '/src/views/AdminArtistList.vue'
import AdminJobList from '/src/views/AdminJobList.vue'
import ArtistListView from '/src/views/ArtistListView.vue'
import ArtistView from '/src/views/ArtistView.vue'
import JobView from '/src/views/JobView.vue'


const routes = [
    {
        name: "ArtistListView",
        path: "/",
        component: ArtistListView
    },
    
    {
        name: "ArtistView",
        path: "/info",
        component: ArtistView
    },
    {
        name: "JobView",
        path: "/jobview",
        component: JobView
    },

    {
        name: "AdminArtistList",
        path: "/admin",
        component: AdminArtistList
    },
    
    {
        name: "AdminArtistInfo",
        path: "/Admin/:id",
        component: AdminArtistInfo
    },
    {
        name: "AdminJobList",
        path: "/admin/job",
        component: AdminJobList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router