import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { BrandButtonsComponent } from './brand-buttons/brand-buttons.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        redirectTo: 'buttons'
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: {
          title: 'Buttons'
        }
      },
     {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'brand-buttons',
        component: BrandButtonsComponent,
        data: {
          title: 'Brand buttons'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule { }
