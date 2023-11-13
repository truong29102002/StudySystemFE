import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SlideSupplierComponent } from './slide-supplier/slide-supplier.component';
import { MaterialModule } from '../material.module';
import { CarouselProductComponent } from './carousel-product/carousel-product.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    SlideSupplierComponent,
    CarouselProductComponent,
    BannerSliderComponent,
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CarouselModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    SlideSupplierComponent,
    CarouselProductComponent,
    BannerSliderComponent,
    CountdownTimerComponent
  ]
})
export class SharedModule { }
