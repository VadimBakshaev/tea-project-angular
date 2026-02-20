import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import { AssortmentComponent } from './assortment/assortment';
import { TextCroppingPipe } from '../../shared/pipes/text-cropping-pipe';
import { ProductComponent } from './product/product';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    AssortmentComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TextCroppingPipe,
    RouterLink
  ]  
})
export class ProductsModule { }
