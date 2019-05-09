import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
	declarations: [ChartsComponent],
	imports: [
		SharedModule,
		ChartsRoutingModule
	]
})
export class ChartsModule { }
