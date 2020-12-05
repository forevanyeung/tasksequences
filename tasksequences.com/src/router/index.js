import { createWebHistory, createRouter } from 'vue-router'
import TSWindow from '../components/TaskSequenceWindow'
import NotFound from '../components/_Error404'

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },

    // change to slug path?
    // /t/best-sequence-ever-2342/install-all-the-apps-23
    // /t/best-sequence-ever-2342/23
    // /t/2342/install-all-the-apps-23
    // /t/2342/23
    // router next is still in beta so this is broken

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