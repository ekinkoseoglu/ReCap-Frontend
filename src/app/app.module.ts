import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgPaymentCardModule } from 'ng-payment-card';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarImageComponent } from './components/carImage/car-image/car-image.component';
import { CarListComponent } from './components/navi/car-list/car-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { CartComponent } from './components/navi/cart/cart.component';
import { PayComponent } from './components/pay/pay.component';

import { FilterPipe } from './pipes/filter.pipe';
import { FilterCarPipe } from './pipes/filter-car.pipe';
import { CarAddComponent } from './components/addComponents/car-add/car-add.component';
import { ColorAddComponent } from './components/addComponents/color-add/color-add.component';
import { BrandAddComponent } from './components/addComponents/brand-add/brand-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    RentalComponent,
    CustomerComponent,
    CarImageComponent,
    CarListComponent,
    FilterPipe,
    FilterCarPipe,
    FilterComponent,
    CartComponent,
    PayComponent,
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgPaymentCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
