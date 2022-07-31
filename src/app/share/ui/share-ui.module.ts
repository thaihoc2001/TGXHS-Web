import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import {CollapseModule} from "ngx-bootstrap/collapse";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTreeModule} from "@angular/material/tree";
import {MatButtonModule} from '@angular/material/button';
import {ProductTypeState} from '../states/product-type/product-type.state';
import { CardProductComponent } from './card-product/card-product.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {TreeviewModule} from "ngx-treeview";
import {RouterModule} from "@angular/router";
import { SubMenuComponent } from './sub-menu/sub-menu.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    MenuComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    CardProductComponent,
    BreadcrumbComponent,
    SubMenuComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    CardProductComponent,
    BreadcrumbComponent,
    SubMenuComponent,
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        MatInputModule,
        CollapseModule.forRoot(),
        MatExpansionModule,
        MatTreeModule,
        MatButtonModule,
        TreeviewModule,
        RouterModule
    ],
  providers: [
    ProductTypeState
  ]
})
export class ShareUiModule { }
