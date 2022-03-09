import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDetails';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  carDtoList: CarDto[];
  constructor() {}

  ngOnInit(): void {}
}
