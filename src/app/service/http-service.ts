import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssortmentType } from '../types/assortment-item.type';
import { OrderType } from '../types/order.type';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  getCatalog(searchItem?: string): Observable<AssortmentType[]> {    
    return this.http.get<AssortmentType[]>('https://testologia.ru/tea', searchItem ? { params: { search:searchItem } } : {});
  };

  postOrder(data: OrderType) {
    return this.http.post<{ success: number }>('https://testologia.ru/order-tea', data);
  }
}
