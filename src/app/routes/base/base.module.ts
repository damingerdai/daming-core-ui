import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { BaseRoutingModule } from './base-routing.module';
import { CarouselsComponent } from './carousels/carousels.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CardsComponent,
    CarouselsComponent
  ],
  imports: [
    SharedModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
