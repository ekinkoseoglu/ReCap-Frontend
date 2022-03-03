import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDetails';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44391/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let localApi: string = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Car>>(localApi);
  }

  getByBrandId(id: number): Observable<ListResponseModel<Car>> {
    let localApi = this.apiUrl + 'getallbybrand?id=' + id;
    return this.httpClient.get<ListResponseModel<Car>>(localApi);
  }
  getByColorId(id: number): Observable<ListResponseModel<Car>> {
    let localApi = this.apiUrl + 'getallbycolor?id=' + id;
    return this.httpClient.get<ListResponseModel<Car>>(localApi);
  }
}
