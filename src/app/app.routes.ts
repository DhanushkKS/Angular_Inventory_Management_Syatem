import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/components/dashboard/dashboard.component';
import { NewPurchaseComponent } from './pages/components/new-purchase/new-purchase.component';
import { NewSaleComponent } from './pages/components/new-sale/new-sale.component';
import { PurchaseListComponent } from './pages/components/purchase-list/purchase-list.component';
import { SaleListComponent } from './pages/components/sale-list/sale-list.component';
import { StockComponent } from './pages/components/stock/stock.component';

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
