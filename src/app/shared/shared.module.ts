import { element } from 'protractor';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedBootstrapModule } from './shared.bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    SharedBootstrapModule,
  ],
  exports: [
    SharedBootstrapModule,
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
