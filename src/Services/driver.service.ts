import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CustomerModel,
  DriverModel,
  ResponseEntityModel,
} from 'src/model/route-request.model';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  DOMAIN: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}
  getDriverById(id: String): Observable<ResponseEntityModel<CustomerModel>> {
    return this.http.get<ResponseEntityModel<DriverModel>>(
      `${this.DOMAIN}carpooling/driver/byid/${id}`
    );
  }
  createDriver(requestBody: DriverModel): Observable<any> {
    return this.http.post('carpooling/driver', requestBody);
  }
}
