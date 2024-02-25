import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
import { PRODUCTS } from '../app/paths/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private url = `${environment.BASE_URL}/${PRODUCTS}`;
  private fetchProductsList(): Observable<any> {
    return this.http.get(this.url);
  }
  getProducts(): Observable<any> {
    return this.fetchProductsList();
  }
}
