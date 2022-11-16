import { Component } from '@angular/core';

export interface RouteRequestDTOModel {
  id?: number;
  serviceRequestTime?: string;
  serviceRequestDate?: string;
  customer?: CustomerModel;
  status?: string;
  routeRequestOrigin?: string;
  routeRequestEnd?: string;
}
export interface CustomerModel {
  id?: string;
  dni?: string;
  firstName?: string;
  secondName?: string;
  firstSurname?: string;
  secondSurname?: string;
  password?: string;
  phone?: number;
  companyEmail?: string;
}

export interface DriverModel {
  id?: string;
  dni?: string;
  firstName?: string;
  secondName?: string;
  firstSurname?: string;
  secondSurname?: string;
  password?: string;
  phone?: number;
  companyEmail?: string;
  licenseNumber?: string;
  authorizedCategory?: {
    id?: string;
    category?: string;
    validity: string;
  };
}

export interface MessagesModel {
  level?: string;
  content?: string;
}
export interface ResponseEntityModel<T> {
  messages?: MessagesModel[];
  data: T[];
}
