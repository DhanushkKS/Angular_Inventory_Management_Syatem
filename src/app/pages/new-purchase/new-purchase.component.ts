import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-purchase',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './new-purchase.component.html',
  styleUrl: './new-purchase.component.css',
})
export class NewPurchaseComponent {
  purchaseBody: any = {
    purchaseDate: '2024-02-12',
    productId: 2,
    quantity: 12,
    supplierName: 'Kasun',
    invoiceAmount: 23,
    invoiceNo: 1,
  };
  dummyProducts: any = [
    {
      productId: 0,
      productName: 'MSI gf63',
    },
    {
      productId: 1,
      productName: 'Apple macbook pro',
    },
    {
      productId: 2,
      productName: 'samsung galaxy',
    },
  ];
  productList: any = ([] = this.dummyProducts);
}
