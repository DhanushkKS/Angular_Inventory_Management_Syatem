import { Component } from '@angular/core';

@Component({
  selector: 'app-new-purchase',
  standalone: true,
  imports: [],
  templateUrl: './new-purchase.component.html',
  styleUrl: './new-purchase.component.css',
})
export class NewPurchaseComponent {
  purchaseBody: any = {
    purchaseDate: '2024-02-12',
    productId: 0,
    quantity: 12,
    supplierName: 'Kasun',
    invoiceAmount: 23,
    invoiceNo: 1,
  };
}
