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
        title: 'Dashboard',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key:'tasks',
        title: 'Tasks',
        path: '/tasks',
        enabled: true,
        component: About,
    },
    {
        key:"forum",
        title: 'Forum',
        path: '/forum',
        enabled: true,
        component: Contact,
    },
];