import { NgModule } from '@angular/core';
import {
	AppAsideModule,
	AppBreadcrumbModule,
	AppHeaderModule,
	AppFooterModule,
	AppSidebarModule,
} from './components';


@NgModule({
	imports: [
		AppAsideModule,
		AppBreadcrumbModule.forRoot(),
		AppHeaderModule,
		AppFooterModule,
		AppSidebarModule,
	],
	exports: [
		AppAsideModule,
		AppBreadcrumbModule,
		AppHeaderModule,
		AppFooterModule,
		AppSidebarModule,
	]
})
export class SharedCoreuiAngularModule { }
