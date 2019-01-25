import { ChartsComponent } from './charts/charts.component';
import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ChartsComponent,
        data: {
            title: 'Dashboard'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule { }
