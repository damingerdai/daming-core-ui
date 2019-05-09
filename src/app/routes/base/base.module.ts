import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { BaseRoutingModule } from './base-routing.module';
import { CarouselsComponent } from './carousels/carousels.component';
import { SharedModule } from '../../shared/shared.module';
import { CollapsesComponent } from './collapses/collapses.component';
import { PaginationsComponent } from './paginations/paginations.component';
import { FormsComponent } from './forms/forms.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressComponent } from './progress/progress.component';
import { SwitchesComponent } from './switches/switches.component';
import { TablesComponent } from './tables/tables.component';
import { TabsComponent } from './tabs/tabs.component';
import { TooltipsComponent } from './tooltips/tooltips.component';

@NgModule({
	declarations: [
		CardsComponent,
		CarouselsComponent,
		CollapsesComponent,
		PaginationsComponent,
		FormsComponent,
		PopoversComponent,
		ProgressComponent,
		SwitchesComponent,
		TablesComponent,
		TabsComponent,
		TooltipsComponent
	],
	imports: [
		SharedModule,
		BaseRoutingModule
	]
})
export class BaseModule { }
