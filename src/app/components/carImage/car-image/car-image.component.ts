import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/car-Image';
import { CarDto } from 'src/app/models/carDetails';
import { CarDtoService } from 'src/app/services/car/car-dto.service';
import { CarImageService } from 'src/app/services/carImage/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css'],
})
export class CarImageComponent implements OnInit {
  currentCarDto: CarDto;
  allDtos: CarDto[];
  allImages: CarImage[];
  currentCarDtoImages: CarImage[];
  srcImg: string[];

  constructor(
    private carImageService: CarImageService,
    private carDtoService: CarDtoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCarDto();
    this.getAllImages();
    this.activatedRoute.params.subscribe((params) => {
      if (params['Id']) {
        this.getImagesOfCurrentCarDto(params['Id']);
      } else {
        this.getAllImages();
      }
    });
  }

  getCarDto() {
    this.carDtoService.getCarsDto().subscribe((response) => {
      this.allDtos = response.data;
    });
  }

  getImagesOfCurrentCarDto(id: number) {
    this.carImageService.getImagesByCarId(id).subscribe((images) => {
      this.currentCarDtoImages = images.data;
    });
  }

  getAllImages() {
    this.carImageService.getAllImages().subscribe((images) => {
      this.allImages = images.data;
    });
  }

  setImgSrc(carDto: CarDto) {
    if (carDto == this.currentCarDto) {
      for (let i = 0; i < this.currentCarDto.carImages.length; i++) {
        this.srcImg[i] == this.currentCarDto.carImages[i].imageUrl;
      }
    }
  }
}
