import { CarUpdateComponent } from './components/updateComponents/car-update/car-update.component';
import { CarAddComponent } from './components/addComponents/car-add/car-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarImageComponent } from './components/carImage/car-image/car-image.component';
import { PayComponent } from './components/pay/pay.component';
import { ColorAddComponent } from './components/addComponents/color-add/color-add.component';
import { BrandAddComponent } from './components/addComponents/brand-add/brand-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/color/:colorId/brand/:brandId', component: CarComponent },
  { path: 'cars/image/:Id', component: CarImageComponent },
  { path: 'pay', component: PayComponent },
  { path: 'cars/add', component: CarAddComponent },
  { path: 'colors/add', component: ColorAddComponent },
  { path: 'brands/add', component: BrandAddComponent },
  { path: 'cars/update', component: CarUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
