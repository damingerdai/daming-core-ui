import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
