import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsSaleComponent } from './component/products-sale/products-sale.component';
import {MatCardModule} from "@angular/material/card";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsByTypeComponent } from './component/products-by-type/products-by-type.component';
import {ProductsHotComponent} from "./component/products-hot/products-hot.component";
import { NewsHomeComponent } from './component/news-home/news-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductsSaleComponent,
    ProductsByTypeComponent,
    ProductsHotComponent,
    NewsHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    CarouselModule
  ]
})
export class HomeModule { }
