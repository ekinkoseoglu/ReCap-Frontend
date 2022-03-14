import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDetails';
import { CarDtoService } from 'src/app/services/car/car-dto.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  carDtoList: CarDto[] = [];
  currentCarDto: CarDto;
  constructor(private carDtoService: CarDtoService) {}

  ngOnInit(): void {
    this.getCarDtos();
  }

  getCarDtos() {
    this.carDtoService.getCarsDto().subscribe((response) => {
      this.carDtoList = response.data;
    });
  }
}
