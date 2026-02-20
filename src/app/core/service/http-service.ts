import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssortmentType } from '../types/assortment-item.type';
import { OrderType } from '../types/order.type';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly http = inject(HttpClient);

  public getCatalog(searchItem?: string): Observable<AssortmentType[]> {
    return this.http.get<AssortmentType[]>('https://testologia.ru/tea', searchItem ? { params: { search: searchItem } } : {});
  };

  public postOrder(data: OrderType): Observable<{ success: number }> {
    return this.http.post<{ success: number }>('https://testologia.ru/order-tea', data);
  };
}
