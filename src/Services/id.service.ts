import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerModel } from 'src/model/route-request.model';

@Injectable({
  providedIn: 'root',
})
export class IdService {
  id: BehaviorSubject<CustomerModel> = new BehaviorSubject({});
  constructor() {}
}
