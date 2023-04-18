//pages imports
import Home from '../pages/Home';
import Auth from '../pages/Auth';

//other imports
import { FC } from 'react';

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
        path: '/home',
        enabled: true,
        component: Home
    },
    {
        key: 'auth',
        title: 'Auth',
        path: '/',
        enabled: true,
        component: Auth
    },
];