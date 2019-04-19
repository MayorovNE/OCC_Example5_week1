import { Component, ViewChild, DoCheck } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { IItem } from 'src/sport_store/interface.data';
import { ShoppingCartService } from 'src/sport_store/shopping_cart.service';

@Component({
    selector: 'Shopping_cart_sportstore-root',
    templateUrl: './shopping_cart.component.html',
    styleUrls: ['./shopping_cart.component.css'],
})
export class ShoppingCartComponent implements DoCheck{

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['items', 'action'];
    dataSource: MatTableDataSource<IItem>;
    private _items: IItem[];
    public cartCost: number;
    public countToToolbar: number = 3;

    constructor(private shoppingcartService: ShoppingCartService) {
        this._items = this.shoppingcartService.getData();
        this.dataSource = new MatTableDataSource(this._items);
        this.cartCost = 0;
    }

    ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    removeItem(name: string) {
      this.shoppingcartService.removeData(name);
      this.dataSource = new MatTableDataSource(this._items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    ngDoCheck() {
      this.cartCost = this.shoppingcartService.getCost();
    }
}