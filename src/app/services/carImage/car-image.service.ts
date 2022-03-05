import { getLocaleDayPeriods } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/car-Image';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  ApiUrl: string = 'https://localhost:44391/api/carimages/';
  constructor(private httpClient: HttpClient) {}

  getAllImages(): Observable<ListResponseModel<CarImage>> {
    let localApi: string = this.ApiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(localApi);
  }

  getImagesByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    let localApi = this.ApiUrl + 'getbycarid?CarId=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(localApi);
  }
}
