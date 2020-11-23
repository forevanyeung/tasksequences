import { createWebHistory, createRouter } from 'vue-router'
import TSWindow from '../components/TaskSequenceWindow'
import NotFound from '../components/_Error404'

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    {
        path: '/:tasksequenceid/',
        name: 'TSWindow',
        component: TSWindow,
        props: true,
        children: [
            {
                path: ':stepid/',
                component: TSWindow,
                props: true
            },
            {
                path: ':stepid/:stepname',
                component: TSWindow,
                props: true
            }
        ]
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;