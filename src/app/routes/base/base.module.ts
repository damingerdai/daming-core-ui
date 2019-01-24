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

@NgModule({
  declarations: [
    CardsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    FormsComponent,
    PopoversComponent,
    ProgressComponent
  ],
  imports: [
    SharedModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
