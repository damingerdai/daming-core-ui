import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        PaginationModule.forRoot(),
    ],
    exports: [
        CommonModule,
        BsDropdownModule,
        TabsModule,
        CarouselModule,
        CollapseModule,
        PaginationModule,
    ]
})
export class SharedBootstrapModule { }
