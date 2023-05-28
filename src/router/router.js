/*===| Vue Router Views Imports |===*/
import { Home } from '../views/Home.js';
import { About } from '../views/About.js';
import { Games } from '../views/Games.js';
import { Favourite } from '../views/Favourite.js';

/*===| Vue Router Instance |===*/
export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/games',
            component: Games
        },
        {
            path: '/favourite',
            component: Favourite
        }
    ]
})