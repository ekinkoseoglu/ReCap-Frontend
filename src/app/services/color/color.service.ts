import { SingleResponseModel } from './../../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  globalApiUrl: string = 'https://localhost:44391/api/colors/';
  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    let localApi = this.globalApiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Color>>(localApi);
  }
  addColors(color: Color): Observable<SingleResponseModel<Color>> {
    let localApi = this.globalApiUrl + 'add';
    return this.httpClient.post<SingleResponseModel<Color>>(localApi, color);
  }
}
