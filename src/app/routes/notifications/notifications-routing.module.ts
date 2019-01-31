import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { ModalsComponent } from './modals/modals.component';
import { ToastrComponent } from './toastr/toastr.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Notifications'
        },
        children: [
            {
                path: '',
                redirectTo: 'alerts'
            },
            {
                path: 'alerts',
                component: AlertsComponent,
                data: {
                    title: 'Alerts'
                }
            },
              {
                path: 'badges',
                component: BadgesComponent,
                data: {
                  title: 'Badges'
                }
              },
              {
                path: 'modals',
                component: ModalsComponent,
                data: {
                  title: 'Modals'
                }
              },
              {
                path: 'toastr',
                component: ToastrComponent,
                data: {
                  title: 'Toastr'
                }
              }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotificationsRoutingModule { }
