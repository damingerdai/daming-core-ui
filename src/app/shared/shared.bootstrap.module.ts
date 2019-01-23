import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        CarouselModule.forRoot()
    ],
    exports: [
        CommonModule,
        BsDropdownModule,
        TabsModule,
        CarouselModule
    ]
})
export class SharedBootstrapModule { }
