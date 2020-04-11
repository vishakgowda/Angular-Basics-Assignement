import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DirectivesComponent} from './directives/directives.component'
import{DataBindingComponent} from './data-binding/data-binding.component';


const routes: Routes =
[
    { path: '', component: DataBindingComponent },
    { path: 'DataBinding', component: DataBindingComponent },
    { path: 'Directives', component: DirectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
