import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
