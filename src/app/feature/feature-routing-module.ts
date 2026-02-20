import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main';
import { OrderComponent } from './order/order';

const routes: Routes = [
  { path: '', component: MainComponent },  
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
