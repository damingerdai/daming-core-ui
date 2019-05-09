import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { AlertsComponent } from './alerts/alerts.component';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { BadgesComponent } from './badges/badges.component';
import { ModalsComponent } from './modals/modals.component';
import { ToastrComponent } from './toastr/toastr.component';

@NgModule({
	declarations: [
		AlertsComponent,
		BadgesComponent,
		ModalsComponent,
		ToastrComponent
	],
	imports: [
		SharedModule,
		NotificationsRoutingModule
	]
})
export class NotificationsModule { }
