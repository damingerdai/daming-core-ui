import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { CollapsesComponent } from './collapses/collapses.component';
import { PaginationsComponent } from './paginations/paginations.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Base'
        },
        children: [
            {
                path: '',
                redirectTo: 'cards'
            },
            {
                path: 'cards',
                component: CardsComponent,
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'carousels',
                component: CarouselsComponent,
                data: {
                    title: 'Carousels'
                }
            },
            {
                path: 'collapses',
                component: CollapsesComponent,
                data: {
                    title: 'Collapses'
                }
            },
            //   {
            //     path: 'forms',
            //     component: FormsComponent,
            //     data: {
            //       title: 'Forms'
            //     }
            //   },
            {
                path: 'paginations',
                component: PaginationsComponent,
                data: {
                    title: 'Pagination'
                }
            },
            //   {
            //     path: 'switches',
            //     component: SwitchesComponent,
            //     data: {
            //       title: 'Switches'
            //     }
            //   },
            //   {
            //     path: 'tables',
            //     component: TablesComponent,
            //     data: {
            //       title: 'Tables'
            //     }
            //   },
            //   {
            //     path: 'tabs',
            //     component: TabsComponent,
            //     data: {
            //       title: 'Tabs'
            //     }
            //   },


            //   {
            //     path: 'popovers',
            //     component: PopoversComponent,
            //     data: {
            //       title: 'Popover'
            //     }
            //   },
            //   {
            //     path: 'progress',
            //     component: ProgressComponent,
            //     data: {
            //       title: 'Progress'
            //     }
            //   },
            //   {
            //     path: 'tooltips',
            //     component: TooltipsComponent,
            //     data: {
            //       title: 'Tooltips'
            //     }
            //   }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BaseRoutingModule { }
