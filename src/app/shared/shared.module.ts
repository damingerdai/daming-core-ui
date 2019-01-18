import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedBootstrapModule } from './shared.bootstrap.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    SharedBootstrapModule,
  ],
  exports: [
    SharedBootstrapModule,
    PerfectScrollbarModule,
    RouterModule,
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
