import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { SliderComponent } from './slider/slider.component';
import { SmallProductCardComponent } from './small-product-card/small-product-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    SliderComponent,
    SmallProductCardComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent,
    SliderComponent,
    SmallProductCardComponent,
    SearchBarComponent
  ],
})
export class SharedModule { }
