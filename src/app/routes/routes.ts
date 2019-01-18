import { LayoutComponent } from '../layout/layout.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        // children: [
        //     // { path: '', redirectTo: 'home', pathMatch: 'full' },
        //     // { path: 'home', loadChildren: './home/home.module#HomeModule' , data: { title: '主页'}},
        //     // { path: 'forms', loadChildren: './forms/forms.module#FormsModule', data: { title: '表单'} },
        //     // { path: 'table', loadChildren: './table/table.module#TableModule', data: { title: '表格'} },
        // ]
    },

    // Not found
    { path: '**', redirectTo: 'home' }

];
