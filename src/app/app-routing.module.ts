import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewComponentComponent} from './new-component/new-component.component';
import {SecondComponentComponent} from './second-component/second-component.component';

const routes: Routes = [
  {
    path: 'one',
    component: NewComponentComponent
  },
  {
    path: 'two',
    component: SecondComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
