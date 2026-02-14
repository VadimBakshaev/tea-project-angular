import { Injectable, signal } from '@angular/core';
import { AssortmentType } from '../types/assortment-item.type';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  selectedItem = signal<AssortmentType | null>(null);

  setSelectedItem(item: AssortmentType) {
    this.selectedItem.set(item);
  }
}
