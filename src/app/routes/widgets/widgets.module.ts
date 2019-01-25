import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [WidgetsComponent],
  imports: [
    SharedModule,
    WidgetsRoutingModule
  ]
})
export class WidgetsModule { }
