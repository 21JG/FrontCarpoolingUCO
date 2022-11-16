import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CustomerModel,
  ResponseEntityModel,
} from '../model/route-request.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  getClientById(id: String): Observable<ResponseEntityModel<CustomerModel>> {
    return this.http.get<ResponseEntityModel<CustomerModel>>(
      `carpooling/customer/byid/${id}`
    );
  }
  createCustomer(requestBody: CustomerModel): Observable<any> {
    return this.http.post('carpooling/customer', requestBody);
  }
}
