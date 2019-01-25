import { NgModule } from '@angular/core';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { BrandButtonsComponent } from './brand-buttons/brand-buttons.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    BrandButtonsComponent,
  ],
  imports: [
    ButtonsRoutingModule
  ]
})
export class ButtonsModule { }
