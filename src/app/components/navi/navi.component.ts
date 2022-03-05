import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/car-Image';
import { CarDto } from 'src/app/models/carDetails';
import { CarDtoService } from 'src/app/services/car/car-dto.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  imageList: CarImage[];
  currentCarImage: CarImage;
  carDtoList: CarDto[];
  constructor(
    private carDtoService: CarDtoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCarList();
  }
  setCurrentCarImage(carImage: CarImage) {
    this.currentCarImage = carImage;
  }
  getCarList() {
    this.carDtoService.getCarsDto().subscribe((response) => {
      this.carDtoList = response.data;
    });
  }
}
