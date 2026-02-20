import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssortmentComponent } from './assortment/assortment';
import { ProductComponent } from './product/product';


const routes: Routes = [
  { path: 'catalog', component: AssortmentComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
