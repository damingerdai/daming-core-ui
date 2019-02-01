import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { SharedBootstrapModule } from './shared.bootstrap.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PerfectScrollbarModule,
    SharedBootstrapModule,
    ChartsModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedBootstrapModule,
    PerfectScrollbarModule,
    ChartsModule,
    RouterModule,
    ToastrModule,
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
