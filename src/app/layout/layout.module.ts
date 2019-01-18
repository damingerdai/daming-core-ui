import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SharedCoreuiAngularModule } from '../shared/shared.coreui.angular.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedCoreuiAngularModule
  ]
})
export class LayoutModule { }
