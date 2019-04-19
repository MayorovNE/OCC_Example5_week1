import {IItem} from '../sport_store/interface.data';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()

export class ShopService {

    private warehouse: IItem[] = [
        { name: 'Ball0', description: 'its a ball', category: 'football', price: 15.3},
        { name: 'Ball1', description: 'its a ball', category: 'football', price: 16.3},
        { name: 'Ball2', description: 'its a ball', category: 'football', price: 17.3},
        { name: 'Ball3', description: 'its a ball', category: 'football', price: 18.3},
        { name: 'Ball4', description: 'its a ball', category: 'football', price: 19.3},
        { name: 'Ball5', description: 'its a ball', category: 'football', price: 15.3},
        { name: 'Ball6', description: 'its a ball', category: 'football', price: 16.3},
        { name: 'Ball7', description: 'its a ball', category: 'football', price: 17.3},
        { name: 'Ball8', description: 'its a ball', category: 'football', price: 18.3},
        { name: 'Ball9', description: 'its a ball', category: 'football', price: 19.3},
        { name: 'Ball10', description: 'its a ball', category: 'football', price: 15.3},
        { name: 'Ball11', description: 'its a ball', category: 'football', price: 16.3},
        { name: 'Ball12', description: 'its a ball', category: 'football', price: 17.3},
        { name: 'Ball13', description: 'its a ball', category: 'football', price: 18.3},
        { name: 'Ball14', description: 'its a ball', category: 'football', price: 19.3},
    ];
    private locator = (p: IItem, name: string) => p.name == name;

   constructor(private snackBar: MatSnackBar) {
    console.log("warehouse", this.warehouse);
    }
    getData(): IItem[] {
        return this.warehouse;
    }
    addData(name: string, description: string, category: string, price: number) {
        let HelpCount: IItem = {name, description, category, price};
        this.warehouse.push(HelpCount);
        let message = 'This item has been added';
        let action : string;
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
    removeData(name: string) {
        let index = this.warehouse.findIndex(p => this.locator(p, name));
        if ( index > -1 ) {
            this.warehouse.splice(index, 1);
            let message = 'This item has been deleted';
            let action : string;
            this.snackBar.open(message, action, {
                duration: 2000,
            });
        }
    }
}