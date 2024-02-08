import { Routes } from '@angular/router';
import { NewPurchaseComponent } from './pages/new-purchase/new-purchase.component';
import { NewSaleComponent } from './pages/new-sale/new-sale.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PurchaseListComponent } from './pages/purchase-list/purchase-list.component';
import { SaleListComponent } from './pages/sale-list/sale-list.component';
import { StockComponent } from './pages/stock/stock.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
  {
    path: 'new-purchase',
    component: NewPurchaseComponent,
    title: 'New Purchase',
  },
  { path: 'new-sale', component: NewSaleComponent, title: 'New Sale' },
  {
    path: 'purchase-list',
    component: PurchaseListComponent,
    title: 'Purchase List',
  },
  { path: 'sale-list', component: SaleListComponent, title: 'Sale List' },
  { path: 'stock', component: StockComponent, title: 'Stock' },
];
