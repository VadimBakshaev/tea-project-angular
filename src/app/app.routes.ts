import { Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main';
import { AssortmentComponent } from './components/pages/assortment/assortment';
import { OrderComponent } from './components/pages/order/order';
import { ProductComponent } from './components/pages/product/product';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'catalog', component: AssortmentComponent },
    { path: 'product', component: ProductComponent },
    { path: 'order', component: OrderComponent }
];
