import { NgModule } from '@angular/core';
import { ButtonsRoutingModule } from './buttons-rounting.module';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    ButtonsComponent,
  ],
  imports: [
    ButtonsRoutingModule
  ]
})
export class ButtonsModule { }
