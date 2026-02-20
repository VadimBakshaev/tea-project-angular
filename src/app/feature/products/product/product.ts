import { Component, inject } from '@angular/core';
import { DataService } from '../../../core/service/data-service';
import { AssortmentType } from '../../../core/types/assortment-item.type';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class ProductComponent {
  private readonly dataService = inject(DataService);
  protected product: AssortmentType | null = this.dataService.getSelectedItem();
}
