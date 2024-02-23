import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import {
  MatOption,
  MatSelect,
  MatSelectModule,
} from '@angular/material/select';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { environment } from '../../../../environment';
import { HttpClient } from '@angular/common/http';

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
  protected readonly onsubmit = onsubmit;
  selectedProduct: number = 0;

  onSubmit() {
    console.log('submitted', this.selectedProduct);
  }
}
