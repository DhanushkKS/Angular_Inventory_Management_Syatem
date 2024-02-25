import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environment';
import { GET_ALL_PURCHASE, PURCHASE } from '../../../paths/url';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatAnchor } from '@angular/material/button';
import { PurchaseService } from '../../../../services/purchase.service';

@Component({
  selector: 'app-purchase-list',
  standalone: true,
  imports: [NgForOf, RouterLink, MatTableModule, MatAnchor],
  templateUrl: './purchase-list.component.html',
  styleUrl: './purchase-list.component.css',
})
export class PurchaseListComponent implements OnInit {
  private url = `${environment.BASE_URL}/${PURCHASE}`;
  purchaseList: any[] = [];
  constructor(private purchaseService: PurchaseService) {}

  ngOnInit(): void {
    this.purchaseService.getPurchaseList();
  }

  //mui
  displayedColumns = [
    'position',
    'name',
    'weight',
    'symbol',
    'invoiceAmount',
    'invoiceNumber',
    'createdAt',
    'createNew',
  ];
}
