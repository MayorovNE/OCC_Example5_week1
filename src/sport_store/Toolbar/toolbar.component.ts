import { Component, Input, Output, EventEmitter, DoCheck, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from '../sidenav.service';
import { ShoppingCartService } from '../shopping_cart.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SliderService } from '../silder.service';

@Component({
  selector: 'Toolbar_sportstore-root',
  templateUrl: './toolbar.component.html',
  inputs: ['countSwitch'],
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements DoCheck {
  private cartCount: number;
  themeCount: boolean;
  themeColor: string;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private sidenavService: SidenavService,
    private shoppingcartService: ShoppingCartService,
    private sliderService: SliderService,
    ) {
    this.themeCount = this.sliderService.getColor();
  }

  dropAdminMenu1(increased: void) {
      this.sidenavService.dropAdminSidenav.emit(increased);
  }
  ngDoCheck() {
    this.cartCount = this.shoppingcartService.getBadge();
    if (this.themeCount === false) {
      this.themeColor = 'warn';
      this.sliderService.swipeColor(false);
      console.log(this.themeColor);
    }
    else {
      this.themeColor = 'accent';
      this.sliderService.swipeColor(true);
      console.log(this.themeColor);
    }
  }
  openDialogNavigation() {
      const dialogRef = this.dialog.open(DialogNavigationPageComponent, {
      width: '250px',
      });
  }
  openDialogUserPage() {
    const dialogRef = this.dialog.open(DialogUserPageComponent, {
    width: '250px',
    });
  }
  openDialogAdminPage() {
      const dialogRef = this.dialog.open(DialogAdministrationPageComponent, {
      width: '250px',
      });
  }
  openDialogShoppingCartPage() {
    const dialogRef = this.dialog.open(DialogShoppingCartPageComponent, {
    width: '250px',
    });
  }

}

@Component({
  selector: 'dialog-overview-dialog',
  templateUrl: 'dialog_navigation.html',
})
export class DialogNavigationPageComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogNavigationPageComponent>,
    private router: Router,
    ) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  backToNavigation() {
    this.router.navigate(['/navigation']);
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-User-Page',
  templateUrl: 'dialog_user_page.html',
})
export class DialogUserPageComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogUserPageComponent>,
    private router: Router,
    ) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  backToUserPage() {
    this.router.navigate(['/navigation/example5/user_page']);
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-admin-page',
  templateUrl: 'dialog_administration.html',
})
export class DialogAdministrationPageComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogAdministrationPageComponent>,
    private router: Router,
    ) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  goToAdminPage() {
    this.router.navigate(['/navigation/example5/admin_page']);
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-shopping-cart',
  templateUrl: 'dialog_shopping_cart.html',
})
export class DialogShoppingCartPageComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogShoppingCartPageComponent>,
    private router: Router,
    ) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  goToShoppingCart() {
    this.router.navigate(['/navigation/example5/user_page/shopping_cart']);
    this.dialogRef.close();
  }
}