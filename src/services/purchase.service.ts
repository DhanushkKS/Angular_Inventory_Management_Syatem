import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
import { CREATE, PRODUCTS, PURCHASE } from '../app/paths/url';
import { Observable } from 'rxjs';
import PurchaseDto from '../dtos/PurchaseDto';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  constructor(private http: HttpClient) {}
  private url = `${environment.BASE_URL}/${PURCHASE}`;
  private createUrl = `${this.url}/${CREATE}`;
  purchaseList: any[] = [];

  //fetch data
  //fetch purchase list
  private fetchPurchaseList() {
    this.http.get(this.url).subscribe({
      next: (purchaseList: any) => {
        this.purchaseList = purchaseList;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  //create purchase
  private createPurchaseService(dto: PurchaseDto): Observable<any> {
    return this.http.post(this.createUrl, {
      purchase: {
        productId: dto.productId,
        quantity: dto.quantity,
        supplierName: dto.supplierName,
        invoiceAmount: dto.invoiceAmount,
        invoiceNumber: dto.invoiceNumber,
      },
    });
  }

  getPurchaseList() {
    this.fetchPurchaseList();
  }
  createPurchase(dto: PurchaseDto): Observable<any> {
    return this.createPurchaseService(dto);
  }
}
