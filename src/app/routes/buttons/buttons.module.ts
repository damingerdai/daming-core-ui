import { NgModule } from '@angular/core';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { BrandButtonsComponent } from './brand-buttons/brand-buttons.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [
		ButtonsComponent,
		BrandButtonsComponent,
		DropdownsComponent,
	],
	imports: [
		SharedModule,
		ButtonsRoutingModule
	]
})
export class ButtonsModule { }
