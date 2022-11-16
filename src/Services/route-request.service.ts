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
  constructor(private http: HttpClient) {}

  getAllRouteRequest(): Observable<ResponseEntityModel<RouteRequestDTOModel>> {
    return this.http.get<ResponseEntityModel<RouteRequestDTOModel>>(
      `carpooling/routerequest/all`
    );
  }

  createNewRouteRequest(body: RouteRequestDTOModel): Observable<any> {
    return this.http.post(`carpooling/routerequest/`, body);
  }
}
