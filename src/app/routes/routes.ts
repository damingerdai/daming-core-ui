import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'theme', loadChildren: './theme/theme.module#ThemeModule' },
            { path: 'base', loadChildren: './base/base.module#BaseModule' },
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
