import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
