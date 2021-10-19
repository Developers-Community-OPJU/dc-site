
//  Activity Routes
module.exports = {
    path: '/actions',
    name: 'actions',
    component: () => import('../../views/Activity.vue'),
    children: [
        {
            path: 'home',
            name: 'actionHome',
            component: () => import('@/components/activity/Home.vue'),
        },
        {
            path: 'polls',
            name: 'polls',
            component: () => import('@/components/activity/Poll.vue'),
        },
        {
            path: 'confab',
            name: 'confab',
            component: () => import('@/components/activity/Confab.vue'),
        },
        {
            path: 'projects',
            name: 'projects',
            component: () => import('@/components/activity/Projects.vue'),
        },
        {
            path: 'projects/:id',
            name: 'ViewProject',
            component: () => import('@/components/projects/ViewProject.vue'),
        },
        {
            path: 'poll',
            name: 'poll',
            component: () => import('@/components/poll/ViewPoll.vue'),
        },


    ]
}


