import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { RentalDto } from 'src/app/models/rental';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44391/api/rentals/getallrentalsdetail';
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<RentalDto>> {
    return this.httpClient.get<ListResponseModel<RentalDto>>(this.apiUrl);
  }
}
