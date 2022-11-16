import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ResponseEntityModel,
  RouteRequestDTOModel,
} from '../model/route-request.model';

@Injectable({
  providedIn: 'root',
})
export class RouteRequestService {
  DOMAIN: string = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  getAllRouteRequest(): Observable<ResponseEntityModel<RouteRequestDTOModel>> {
    return this.http.get<ResponseEntityModel<RouteRequestDTOModel>>(
      `${this.DOMAIN}carpooling/routerequest/all`
    );
  }

  createNewRouteRequest(body: RouteRequestDTOModel): Observable<any> {
    return this.http.post(`${this.DOMAIN}carpooling/routerequest/`, body);
  }
}
