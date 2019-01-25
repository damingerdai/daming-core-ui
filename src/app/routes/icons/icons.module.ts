import { NgModule } from '@angular/core';
import { CoreuiIconsComponent } from './coreui-icons/coreui-icons.component';
import { IconsRoutingModule } from './icons-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CoreuiIconsComponent],
  imports: [
    SharedModule,
    IconsRoutingModule
  ]
})
export class IconsModule { }
