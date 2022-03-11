import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/car-Image';
import { CarDto } from 'src/app/models/carDetails';
import { CarDtoService } from 'src/app/services/car/car-dto.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CarImageService } from 'src/app/services/carImage/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  currentCarDto: CarDto;
  currentDtoImages: CarImage[];
  imageBasePath: string = 'https://localhost:44391';

  constructor(
    private CarDtoService: CarDtoService,
    private CarImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    public domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['Id']) {
        this.getCurrentCarDto(params['Id']);
      } else {
        this.getAllImages();
      }
    });
  }

  getCurrentCarDto(id: number) {
    this.CarDtoService.getDtoById(id).subscribe((response) => {
      this.currentCarDto = response.data;
      this.currentDtoImages = response.data.carImages;
    });
  }

  getAllImages() {
    this.CarImageService.getAllImages().subscribe();
  }
}
