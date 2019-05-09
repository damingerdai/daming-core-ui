import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';

@NgModule({
	declarations: [
		LoginComponent,
		RegisterComponent,
		Page404Component,
		Page500Component
	],
	imports: [
		SharedModule,
		PagesRoutingModule,
	]
})
export class PagesModule { }
