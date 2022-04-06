import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  currentDtoImages: CarImage[];
  description: string;
  imageBasePath: string = 'https://localhost:44391';

  constructor(
    private carDtoService: CarDtoService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['Id']) {
        this.getCurrentCarDto(params['Id']);
        this.description = this.currentCarDto.description;
      } else {
        this.getAllImages();
      }
    });
  }

  getCurrentCarDto(id: number) {
    this.carDtoService.getDtoById(id).subscribe((response) => {
      this.currentCarDto = response.data;
      this.currentDtoImages = response.data.carImages;
    });
  }

  getAllImages() {
    this.carImageService.getAllImages().subscribe();
  }
}
