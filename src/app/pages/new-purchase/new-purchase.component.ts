import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { environment } from '../../../../environment';
import { HttpClient } from '@angular/common/http';
import { PURCHASE } from '../../paths/url';

@Component({
  selector: 'app-new-purchase',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButton,
    MatGridList,
    MatGridTile,
  ],
  templateUrl: './new-purchase.component.html',
  styleUrl: './new-purchase.component.css',
})
export class NewPurchaseComponent implements OnInit {
  private url = `${environment.BASE_URL}/products`;
  private createProductUrl = `${environment.BASE_URL}/${PURCHASE}/create`;
  products: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProductsList();
  }
  getProductsList() {
    this.http.get(this.url).subscribe({
      next: (products: any) => {
        this.products = products;
        console.log(this.products);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  purchaseForm = new FormGroup({
    productId: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    supplierName: new FormControl('', Validators.required),
    invoiceAmount: new FormControl('', Validators.required),
    invoiceNumber: new FormControl('', Validators.required),
  });
  selectedProduct: number = 1;

  purchaseBody: any;

  onSubmit() {
    this.purchaseBody = {
      purchase: {
        productId: this.selectedProduct,
        quantity: this.purchaseForm.value.quantity,
        supplierName: `${this.purchaseForm.value.supplierName}`,
        invoiceAmount: this.purchaseForm.value.invoiceAmount,
        invoiceNumber: this.purchaseForm.value.invoiceNumber,
      },
    };
    console.log('submitted', this.selectedProduct);
    console.log('suplier', this.purchaseForm.value.supplierName);

    this.http
      .post(this.createProductUrl, this.purchaseBody)
      .subscribe((res) => {
        console.log('success', res);
      });
  }
}
