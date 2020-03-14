import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectMultipleDropdownComponent } from './select-multiple-dropdown/select-multiple-dropdown.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'multipleSelect',
    pathMatch: 'full'
  },
  {
    path: 'multipleSelect',
    component: SelectMultipleDropdownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
