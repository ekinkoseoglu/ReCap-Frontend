import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

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
  addCar(car: Car): Observable<SingleResponseModel<Car>> {
    let localApi = this.apiUrl + 'add';
    return this.httpClient.post<SingleResponseModel<Car>>(localApi, car);
  }
  updateCar(car: Car): Observable<SingleResponseModel<Car>> {
    let localApi = this.apiUrl + 'update';
    return this.httpClient.put<SingleResponseModel<Car>>(localApi, car);
  }
}
