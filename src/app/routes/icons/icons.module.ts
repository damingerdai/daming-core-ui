import { NgModule } from '@angular/core';
import { CoreuiIconsComponent } from './coreui-icons/coreui-icons.component';
import { IconsRoutingModule } from './icons-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FlagsComponent } from './flags/flags.component';
import { FontAwesomeComponent } from './font-awesome/font-awesome.component';
import { SimpleLineIconsComponent } from './simple-line-icons/simple-line-icons.component';

@NgModule({
	declarations: [CoreuiIconsComponent, FlagsComponent, FontAwesomeComponent, SimpleLineIconsComponent],
	imports: [
		SharedModule,
		IconsRoutingModule
	]
})
export class IconsModule { }
