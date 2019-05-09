import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors/colors.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
	declarations: [
		ColorsComponent,
		TypographyComponent
	],
	imports: [
		CommonModule,
		ThemeRoutingModule
	]
})
export class ThemeModule { }
