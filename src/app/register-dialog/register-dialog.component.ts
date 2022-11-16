import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerModel, DriverModel } from 'src/model/route-request.model';
import { CustomerService } from 'src/Services/customer.service';
import { DriverService } from 'src/Services/driver.service';
import {FormControl} from "@angular/forms";
const { v4: uuid } = require('uuid');


@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css'],
})
export class RegisterDialogComponent implements OnInit {
  driver: boolean = false;
  id: string = uuid();
  firstName: string = '';
  secondName: string = '';
  firstSurname: string = '';
  secondSurname: string = '';
  password: string = '';
  phone: number = 0;
  email: string = '';
  dni: string = '';
  licenseNumber: string = '';
  category: string = '';
  validity: string = '';
  categoryId: string = '';

  constructor(
    private dialogRef: MatDialogRef<RegisterDialogComponent>,
    private customerService: CustomerService,
    private driverService: DriverService
  ) {}

  ngOnInit(): void {}

  onRegister() {
    if (this.driver) {
      let requestBody: DriverModel = {
        authorizedCategory: {
          validity: this.validity,
          category: this.category,
          id: this.categoryId,
        },
        companyEmail: this.email,
        dni: this.dni,
        firstName: this.firstName,
        firstSurname: this.firstSurname,
        id: this.id,
        licenseNumber: this.licenseNumber,
        password: this.password,
        phone: this.phone,
        secondName: this.secondName,
        secondSurname: this.secondSurname,
      };
      this.driverService.createDriver(requestBody).subscribe((response) => {
        console.log('Se creó exitosamente');
        this.dialogRef.close();
      });
    } else {
      let requestBody: CustomerModel = {
        companyEmail: this.email,
        dni: this.dni,
        firstName: this.firstName,
        firstSurname: this.firstSurname,
        id: this.id,
        password: this.password,
        phone: this.phone,
        secondName: this.secondName,
        secondSurname: this.secondSurname,
      };
      this.customerService.createCustomer(requestBody).subscribe((response) => {
        console.log('Se creó exitosamente');
        this.dialogRef.close();
      });
    }
  }
}
