import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'theme', loadChildren: './theme/theme.module#ThemeModule' },
            { path: 'base', loadChildren: './base/base.module#BaseModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
