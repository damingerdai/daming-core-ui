import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
    ],
    exports: [
        BsDropdownModule,
        TabsModule
    ]
})
export class SharedBootstrapModule { }
