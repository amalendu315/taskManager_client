//pages imports
import Home from '../pages/Home';

//other imports
import { FC } from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';

//interface
interface IRoute {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<IRoute> = [
    {
        key: 'home',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key:'about',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About,
    },
    {
        key:"contact",
        title: 'Contact',
        path: '/contact',
        enabled: true,
        component: Contact,
    },
];