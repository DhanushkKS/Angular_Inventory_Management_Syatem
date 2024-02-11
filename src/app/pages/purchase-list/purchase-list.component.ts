import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment';
import { GET_ALL_PURCHASE, PURCHASE } from '../../paths/url';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-purchase-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './purchase-list.component.html',
  styleUrl: './purchase-list.component.css',
})
export class PurchaseListComponent implements OnInit {
  private url = `${environment.BASE_URL}/${PURCHASE}/${GET_ALL_PURCHASE}`;
  purchaseList: any[] = [{ list: 'l1' }, { list: 'l2' }];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getPurchaseList();
  }
  getPurchaseList() {
    this.http.get(this.url).subscribe({
      next: (purchaseList: any) => {
        this.purchaseList = purchaseList;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed fetching');
      },
    });
  }
}
