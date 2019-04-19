import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ShopService } from '../../Shop.service';
import {IItem} from '../../interface.data';

@Component({
  selector: 'Delete_page_sportstore-root',
  templateUrl: './deletepage.component.html',
  styleUrls: ['./deletepage.component.css'],
})
export class DeletePageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'category', 'price', 'action'];
  dataSource: MatTableDataSource<IItem>;
  private _items: IItem[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private shopService: ShopService) {
    this._items = this.shopService.getData();
    this.dataSource = new MatTableDataSource(this._items);
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
    this.shopService.removeData(name);
    this.dataSource = new MatTableDataSource(this._items);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
