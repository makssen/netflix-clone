import React from 'react';
import TheatersIcon from '@material-ui/icons/Theaters';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import SearchIcon from '@material-ui/icons/Search';
import { Films, Search, Watch } from './pages';

export const routes = [{
    label: 'Films',
    exact: true,
    path: '/',
    icon: < TheatersIcon />,
    component: Films
},
{
    label: 'Watch',
    path: '/watch',
    icon: < AddToQueueIcon />,
    component: Watch
},
{
    label: 'Search Film',
    path: '/search',
    icon: < SearchIcon />,
    component: Search
}
];