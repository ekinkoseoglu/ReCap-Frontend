import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit, OnChanges {
  cars: Car[] = [];
  dataLoaded = false;
  // carDetails: CarDto[] = [];
  currentCar: Car;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        // Url içinde "brandId" adında bir Url parametresi varsa o path hangi template'de 'routeLink' içine yazılmışsa o templatenin Componentinden aldığın değeri bu Componentte kullanabilirsin.
        this.getCarsByBrand(params['brandId']); // "brandId" propertysi x olan Car'ları listele
      } else if (params['colorId']) {
        // Url içinde "colorId" adında bir Url parametresi varsa o path hangi template'de 'routeLink' içine yazılmışsa o templatenin Componentinden aldığın değeri bu Componentte kullanabilirsin.
        this.getCarsByColor(params['colorId']); //"colorId" propertysi x olan Car'ları listele
      } // Eğer iki Url parametresi de Url de yoksa o zaman Component başladığı anda bu methodu çalıştır.
      else {
        this.getCars();
      }
    });
  }

  ngOnChanges(): void {}

  getCarsByColor(id: number) {
    this.carService.getByColorId(id).subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(id: number) {
    this.carService.getByBrandId(id).subscribe((response) => {
      this.cars = response.data;
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
}
