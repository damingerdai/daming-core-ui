import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreuiIconsComponent } from './coreui-icons/coreui-icons.component';
import { FlagsComponent } from './flags/flags.component';

// import { FlagsComponent } from './flags.component';
// import { FontAwesomeComponent } from './font-awesome.component';
// import { SimpleLineIconsComponent } from './simple-line-icons.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Icons'
        },
        children: [
            {
                path: '',
                redirectTo: 'coreui-icons'
            },
            {
              path: 'coreui-icons',
              component: CoreuiIconsComponent,
              data: {
                title: 'CoreUI Icons'
              }
            },
            {
              path: 'flags',
              component: FlagsComponent,
              data: {
                title: 'Flags'
              }
            },
            // {
            //   path: 'font-awesome',
            //   component: FontAwesomeComponent,
            //   data: {
            //     title: 'Font Awesome'
            //   }
            // },
            // {
            //   path: 'simple-line-icons',
            //   component: SimpleLineIconsComponent,
            //   data: {
            //     title: 'Simple Line Icons'
            //   }
            // }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IconsRoutingModule {

}
