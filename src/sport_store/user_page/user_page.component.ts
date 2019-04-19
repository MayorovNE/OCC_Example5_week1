import { Component, ViewChild, Input } from '@angular/core';
import { ShopService } from '../Shop.service';
import { IItem } from '../interface.data';
import { ShoppingCartService } from '../shopping_cart.service';

@Component({
  selector: 'User_page_sportstore-root',
  templateUrl: './user_page.component.html',
  styleUrls: ['./user_page.component.css'],
})
export class UserPageComponent {

  private items: IItem[];
  countToToolbar = 1;
  countColor: boolean;
  constructor(
    private shopService: ShopService,
    private shoppingcartService: ShoppingCartService
    ) {
    this.items = this.shopService.getData();
  }

  addToShoppingCart(name: string, description: string, category: string, price: number) {
    this.shoppingcartService.addData(name, description, category, price);
  }

  addToWishlist() {

  }
}
