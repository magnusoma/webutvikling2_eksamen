import {createWebHistory, createRouter} from 'vue-router'

import AdminArtistInfo from '/src/views/admin/AdminArtistInfo.vue'
import AdminArtistList from '/src/views/admin/AdminArtistList.vue'
import AdminJobList from '/src/views/admin/AdminJobList.vue'
import HomePageView from '/src/views/HomePageView.vue'
import ArtistView from '/src/views/ArtistView.vue'
import JobView from '/src/views/JobView.vue'


const routes = [
    {
        name: "HomePageView",
        path: "/",
        component: HomePageView
    },
    
    {
        name: "ArtistView",
        path: "/info/:id/",
        component: ArtistView
    },
    {
        name: "JobView",
        path: "/mission",
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