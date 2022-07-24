import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { ToasterModule } from 'angular-toaster';
import { SharedBootstrapModule } from './shared.bootstrap.module';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		PerfectScrollbarModule,
		SharedBootstrapModule,
		NgChartsModule,
		ToastrModule.forRoot(),
		ToasterModule.forRoot(),
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		SharedBootstrapModule,
		PerfectScrollbarModule,
		NgChartsModule,
		RouterModule,
		ToastrModule,
		ToasterModule,
	]
})
export class SharedModule {

	static forRoot(): ModuleWithProviders<SharedModule> {
		return {
			ngModule: SharedModule
		};
	}
}
