import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from 'src/app/models/carDetails';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDtoService {
  apiUrl = 'https://localhost:44391/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCarsDto(): Observable<ListResponseModel<CarDto>> {
    let localApi: string = this.apiUrl + 'getalldtos';
    return this.httpClient.get<ListResponseModel<CarDto>>(localApi);
  }

  getByBrandId(id: number): Observable<ListResponseModel<CarDto>> {
    let localApi = this.apiUrl + 'getalldtosbybrand?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDto>>(localApi);
  }
  getByColorId(id: number): Observable<ListResponseModel<CarDto>> {
    let localApi = this.apiUrl + 'getalldtosbycolor?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDto>>(localApi);
  }
}
