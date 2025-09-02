import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Team } from './app/pages/team/team';
import { Tabs } from './app/pages/tabs/tabs';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', redirectTo: 'team', pathMatch: 'full' },
            { path: 'team', component: Team },
            { path: 'tabs', component: Tabs }
        ]
    },
    { path: '**', redirectTo: '' }
];