import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car/car.service';
import { CarDto } from 'src/app/models/carDetails';
import { CarDtoService } from 'src/app/services/car/car-dto.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDtos: CarDto[] = [];
  dataLoaded = false;
  searchString: string = '';
  // carDetails: CarDto[] = [];
  currentCar: Car;
  constructor(
    private carService: CarService,
    private carDtoService: CarDtoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId']) {
        this.getCarDtosByColorBrand(params['brandId'], params['colorId']);
        // Url içinde "brandId" adında bir Url parametresi varsa o path hangi template'de 'routeLink' içine yazılmışsa o templatenin Componentinden aldığın değeri bu Componentte kullanabilirsin.
      } // Eğer iki Url parametresi de Url de yoksa o zaman Component başladığı anda bu methodu çalıştır.
      else if (params['brandId']) {
        this.getCarDtosByBrand(params['brandId']); // "brandId" propertysi x olan Car'ları listele
      } else if (params['colorId']) {
        // Url içinde "colorId" adında bir Url parametresi varsa o Url parametresinin tanımlandığı path hangi template'de 'routeLink' içine yazılmışsa o templatenin Componentinden aldığın değeri bu Componentte kullanabilirsin.
        this.getCarDtosByColor(params['colorId']); //"colorId" propertysi x olan Car'ları listele
      } else {
        this.getCarsDto();
      }
    });
  }

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
  getCarDtosByColorBrand(colorId: number, brandId: number) {
    this.carDtoService
      .getByBrandIdColorId(colorId, brandId)
      .subscribe((response) => {
        this.carDtos = response.data;
      });
  }
  getCarsDto() {
    this.carDtoService.getCarsDto().subscribe((response) => {
      this.carDtos = response.data;
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  // Car DTO Methods

  getCarDtosByColor(id: number) {
    this.carDtoService.getByColorId(id).subscribe((response) => {
      this.carDtos = response.data;
    });
  }

  getCarDtosByBrand(id: number) {
    this.carDtoService.getByBrandId(id).subscribe((response) => {
      this.carDtos = response.data;
    });
  }
}
