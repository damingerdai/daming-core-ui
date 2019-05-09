import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedCoreuiAngularModule } from '../shared/shared.coreui.angular.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
	declarations: [
		LayoutComponent,
		HeaderComponent,
		FooterComponent,
		SidebarComponent,
		AsideComponent],
	imports: [
		CommonModule,
		SharedModule,
		SharedCoreuiAngularModule
	]
})
export class LayoutModule { }
