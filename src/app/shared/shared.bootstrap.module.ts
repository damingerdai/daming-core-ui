import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
    ],
    exports: [
        CommonModule,
        BsDropdownModule,
        TabsModule,
        CarouselModule,
        CollapseModule,
    ]
})
export class SharedBootstrapModule { }
