import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SportStoreRoutingModule } from './sport_store-routing.module';
import { SportStoreComponent } from './sport_store.component';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user_page/user_page.component';
import { MatButtonModule, MatIconModule, MatCardModule, MatDividerModule, MatToolbarModule, MatMenuModule, MatSlideToggleModule, MatSidenavModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule, MatSnackBarModule, MatBadgeModule, MatDialogModule} from '@angular/material';
import { ToolbarComponent, DialogNavigationPageComponent, DialogAdministrationPageComponent, DialogUserPageComponent, DialogShoppingCartPageComponent } from './Toolbar/toolbar.component';
import { AdminPageComponent } from './AdminPage/adminpage.component';
import { ShoppingCartComponent } from './user_page/Shopping_cart/shopping_cart.component';
import { SidenavService } from './sidenav.service';
import { AddPageComponent } from './AdminPage/AddPage/addpage.component';
import { DeletePageComponent } from './AdminPage/DeletePage/deletepage.component';
import { ShopService } from './Shop.service';
import { ShoppingCartService } from './shopping_cart.service';
import { WishlistComponent } from './user_page/Wishlist/wishlist.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { SliderService } from './silder.service';


@NgModule({
  declarations: [
    SportStoreComponent,
    UserPageComponent,
    ToolbarComponent,
    AdminPageComponent,
    ShoppingCartComponent,
    AddPageComponent,
    DeletePageComponent,
    DialogNavigationPageComponent,
    DialogUserPageComponent,
    DialogAdministrationPageComponent,
    DialogShoppingCartPageComponent,
    WishlistComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    SportStoreRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatDialogModule,
    OverlayModule
  ],
  entryComponents: [
    ToolbarComponent,
    DialogNavigationPageComponent,
    DialogUserPageComponent,
    DialogAdministrationPageComponent,
    DialogShoppingCartPageComponent,
  ],
  exports: [
    SportStoreComponent
  ],
  providers: [
    SidenavService,
    ShopService,
    ShoppingCartService,
    SliderService
  ],
  bootstrap: [SportStoreComponent]
})
export class SportStoreModule { }