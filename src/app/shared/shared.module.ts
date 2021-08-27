import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { ToasterModule } from 'angular2-toaster';
import { SharedBootstrapModule } from './shared.bootstrap.module';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		PerfectScrollbarModule,
		SharedBootstrapModule,
		ChartsModule,
		ToastrModule.forRoot(),
		ToasterModule.forRoot(),
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		SharedBootstrapModule,
		PerfectScrollbarModule,
		ChartsModule,
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
