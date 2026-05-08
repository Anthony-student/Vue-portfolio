import EmptyLayoutVue from "@/layouts/EmptyLayout.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";
import Home from "@/pages/Home.vue";
import InConstruction from "@/pages/InConstruction.vue";
import NotFound from "@/pages/NotFound.vue";
import Services from "@/pages/Services.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: { title: "Home" },
        },
        {
            path: "/about-us",
            name: "about-us",
            component: About,
            meta: {
                title: "About",
            },
        },
        {
            path: "/blogs",
            name: "blogs",
            redirect: (to) => {
                return { name: "in-construction" };
            },
            // component: Blogs,
            meta: {
                title: "Blogs -Grid System Unique Portfolio VueJs Template",
            },
        },
        {
            path: "/blog-details",
            redirect: (to) => {
                return { name: "in-construction" };
            },
            // component: BlogDetails,
            meta: {
                title: "Blog Details",
            },
        },
        {
            path: "/all-projects",
            name: "all-projects",

            redirect: (to) => {
                return { name: "in-construction" };
            },
            // component: AllProjectsPage,
            meta: {
                title: "App Projects",
            },
        },
        {
            path: "/project-details",

            redirect: (to) => {
                return { name: "in-construction" };
            },
            // component: ProjectDetails,
            meta: {
                title: "App Projects",
            },
        },
        {
            path: "/services",
            name: "services",

            component: Services,
            meta: {
                title: "Services",
            },
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact,
            meta: {
                title: "Services",
            },
        },
        {
            path: "/not-found",
            component: NotFound,
            meta: {
                layout: EmptyLayoutVue,
                title: "Not Found",
            },
        },
        {
            path: "/in-construction",
            name: "in-construction",
            component: InConstruction,
            meta: {
                layout: EmptyLayoutVue,
                title: "construction (web)site",
            },
        },
        {
            path: "/:pathMatch(.*)*",
            component: NotFound,
            meta: {
                layout: EmptyLayoutVue,
                title: "Not Found",
            },
        },
    ],
});

export default router;
