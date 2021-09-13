import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/profile-pop',
        name: 'ProfilePop',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/ProfileModal.vue'),
    },
    {
        path: '/profile-view',
        name: 'Profile',
        component: () => 
        import('../views/SideProfileView.vue')
    },
    {
        path: '/emoji-action',
        name: 'EmojiAction',
        component: () => 
        import('../views/emojiAction.vue')
    },
    {
        path: '/direct-message',
        name: 'DirectMessage',
        component: () => 
        import('../views/directMessage.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
