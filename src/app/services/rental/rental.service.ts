import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  globalApi: string = 'https://localhost:44391/api/rentals/';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let localApi = this.globalApi + 'getall';
    return this.httpClient.get<ListResponseModel<Rental>>(localApi);
  }

  getById(id: string): Observable<SingleResponseModel<Rental>> {
    let localApi = this.globalApi + 'getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Rental>>(localApi);
  }

  getByCarId(id: number): Observable<SingleResponseModel<Rental>> {
    let localApi = this.globalApi + 'getbycarid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Rental>>(localApi);
  }
}
