import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportStoreComponent } from './sport_store.component';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './user_page/Shopping_cart/shopping_cart.component';
import { AdminPageComponent } from './AdminPage/adminpage.component';
import { UserPageComponent } from './user_page/user_page.component';

const routing =  RouterModule.forChild([
  
  { path: 'navigation/example5', children: [
    { path: '', redirectTo: '/navigation/example5/user_page', pathMatch: 'full'},
    { path: 'user_page', component: UserPageComponent},
    { path: 'admin_page', component: AdminPageComponent},
    { path: 'user_page/shopping_cart', component: ShoppingCartComponent},
  ]},
]);

@NgModule({
  imports: [CommonModule, routing],
  declarations: []
})
export class SportStoreRoutingModule { }