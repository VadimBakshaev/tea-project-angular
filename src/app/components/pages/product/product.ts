import { Component, inject } from '@angular/core';
import { DataService } from '../../../service/data-service';
import { AssortmentType } from '../../../types/assortment-item.type';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class ProductComponent {
  private dataService = inject(DataService);
  product: AssortmentType | null = this.dataService.selectedItem();
}
