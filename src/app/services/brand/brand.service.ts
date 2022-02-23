import { Injectable } from '@angular/core';
import { BrandResponseModel } from 'src/app/models/BrandResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl: string = 'https://localhost:44391/api/brands/getall';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}
