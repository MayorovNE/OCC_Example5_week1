import {IItem} from '../sport_store/interface.data';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()

export class ShoppingCartService {

    private cart: IItem[] = [];
    private costofCart = 0;
    private locator = (p: IItem, name: string) => p.name == name;

   constructor(private snackBar: MatSnackBar) {
    }
    getData(): IItem[] {
        return this.cart;
    }
    addData(name: string, description: string, category: string, price: number) {
        let HelpCount: IItem = {name, description, category, price};
        this.costofCart = Number(this.costofCart.toFixed(2)) + Number(price.toFixed(2));
        this.costofCart = Number(this.costofCart.toFixed(2));
        this.cart.push(HelpCount);
        let message = 'This item has been added in shopping cart';
        let action : string;
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
    removeData(name: string) {
        let index = this.cart.findIndex(p => this.locator(p, name));
        this.costofCart = this.costofCart - this.cart[index].price;
        if ( index > -1 ) {
            this.cart.splice(index, 1);
            let message = 'This item has been deleted from shopping cart';
            let action : string;
            this.snackBar.open(message, action, {
                duration: 2000,
            });
        }
    }
    getCost() {
        return Number(this.costofCart.toFixed(2));
    }
    getBadge() {
        let count: number;
        count = this.cart.length;
        if (count != 0) {
            return count;
        }
    }
}