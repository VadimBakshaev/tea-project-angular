import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing-module';
import { MainModule } from './main/main-module';
import { OrderModule } from './order/order-module';
import { ProductsModule } from './products/products-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MainModule,
    OrderModule,
    ProductsModule 
  ]
})
export class FeatureModule { }
