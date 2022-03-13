import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from 'src/app/models/carDetails';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDtoService {
  apiUrl = 'https://localhost:44391/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCarsDto(): Observable<ListResponseModel<CarDto>> {
    //  Get All DTOS
    let localApi: string = this.apiUrl + 'getalldtos';
    return this.httpClient.get<ListResponseModel<CarDto>>(localApi);
  }
  getDtoById(id: number): Observable<SingleResponseModel<CarDto>> {
    // Get Specific Dto By Its Car Id
    let localApi: string = this.apiUrl + 'getdtobyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<CarDto>>(localApi);
  }

  getByBrandId(id: number): Observable<ListResponseModel<CarDto>> {
    // Get Specific Dto By Its Brand Id
    let localApi = this.apiUrl + 'getalldtosbybrand?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDto>>(localApi);
  }
  getByColorId(id: number): Observable<ListResponseModel<CarDto>> {
    // Get Specific Dto By Its Color Id
    let localApi = this.apiUrl + 'getalldtosbycolor?id=' + id;
    return this.httpClient.get<ListResponseModel<CarDto>>(localApi);
  }

  getByBrandIdColorId(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarDto>> {
    let localApi =
      this.apiUrl +
      'getdtosbybrandidcolorid?BrandId=' +
      brandId +
      '&ColorId=' +
      colorId;

    return this.httpClient.get<ListResponseModel<CarDto>>(localApi);
  }
}
