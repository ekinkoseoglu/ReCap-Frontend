import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  globalApiUrl: string = 'https://localhost:44391/api/brands/';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let localApi = this.globalApiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Brand>>(localApi);
  }
  addBrands(brand: Brand): Observable<SingleResponseModel<Brand>> {
    let localApi = this.globalApiUrl + 'add';
    return this.httpClient.post<SingleResponseModel<Brand>>(localApi, brand);
  }
}
