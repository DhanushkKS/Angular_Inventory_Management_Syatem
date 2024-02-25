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

import { PurchaseService } from '../../../../services/purchase.service';
import { ProductService } from '../../../../services/product.service';
import PurchaseDto from '../../../../dtos/PurchaseDto';

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
  constructor(
    private purchaseService: PurchaseService,
    private productService: ProductService,
  ) {}

  products: any[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products: any) => {
        this.products = products;
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

  onSubmit() {
    const dto = new PurchaseDto(
      <number>this.selectedProduct,
      Number.parseInt(<string>this.purchaseForm.value.quantity),
      <string>this.purchaseForm.value.supplierName,
      Number.parseInt(<string>this.purchaseForm.value.invoiceAmount),
      <string>this.purchaseForm.value.invoiceNumber,
    );
    this.purchaseService.createPurchase(dto).subscribe({
      next: () => {
        console.log('Created success');
      },
      error: (e) => {
        console.log('Error Happened,', e);
      },
    });
  }
}
