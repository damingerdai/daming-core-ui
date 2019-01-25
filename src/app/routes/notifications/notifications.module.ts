import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { AlertsComponent } from './alerts/alerts.component';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { BadgesComponent } from './badges/badges.component';

@NgModule({
  declarations: [
    AlertsComponent,
    BadgesComponent
  ],
  imports: [
    SharedModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
