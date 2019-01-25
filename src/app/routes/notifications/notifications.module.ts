import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { AlertsComponent } from './alerts/alerts.component';
import { NotificationsRoutingModule } from './notifications-routing.module';

@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    SharedModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
