import { Injectable } from '@angular/core';
import { AssortmentType } from '../types/assortment-item.type';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private selectedItem: AssortmentType | null = null;

  public getSelectedItem(): AssortmentType | null {
    return this.selectedItem;
  }

  public setSelectedItem(item: AssortmentType): void {
    item ? this.selectedItem = item : this.selectedItem = null;
  }
}
