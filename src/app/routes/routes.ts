import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'theme', loadChildren: './theme/theme.module#ThemeModule' , data: { title: '主页'}},
            // { path: 'forms', loadChildren: './forms/forms.module#FormsModule', data: { title: '表单'} },
            // { path: 'table', loadChildren: './table/table.module#TableModule', data: { title: '表格'} },
        ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
