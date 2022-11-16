import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/Services/customer.service';
import { DriverService } from 'src/Services/driver.service';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { IdService } from 'src/Services/id.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  password: string = '';
  id: string = '';

  title = 'CarpoolingLoginUCO';

  constructor(
    public dialog: MatDialog,
    private customerService: CustomerService,
    private communicationService: IdService,
    private driverService: DriverService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  openRegisterDialog() {
    let dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '70%',
    });
  }
  login() {
    this.customerService.getClientById(this.id).subscribe((response) => {
      if (response.data[0]?.password == this.password) {
        this.communicationService.id.next(
          response.data[0] ? response.data[0] : {}
        );
        this.router.navigate(['carpooling/request']);
      }
    });
    this.driverService.getDriverById(this.id).subscribe((response) => {
      if (response.data[0]?.password == this.password) {
        this.communicationService.id.next(
          response.data[0] ? response.data[0] : {}
        );
        this.router.navigate(['carpooling/request']);
      }
    });
  }
}
