import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/Services/customer.service';
import { DriverService } from 'src/Services/driver.service';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { IdService } from 'src/Services/id.service';
import {ToastrService} from "ngx-toastr";

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
    private router: Router,
    private toaster:ToastrService
  ) {}

  ngOnInit(): void {}
  openRegisterDialog() {
    let dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '70%',
    });
  }
  login() {
    if(this.id == '' || this.password ==''){
      this.toaster.info("Id and password are mandatory")
    }else {
      this.customerService.getClientById(this.id).subscribe((response) => {
        if (response.data[0]?.password == this.password) {
          this.communicationService.id.next(
              response.data[0] ? response.data[0] : {}
          );
          this.router.navigate(['carpooling/request']);
        }
      });
      this.driverService.getDriverById(this.id).subscribe((res) => {
            for (let i = 0; i < res.messages?.length; i = i + 1) {
              this.toaster.success(res.messages[i]?.content);
            }
          },
          (error) => {
            for (let i = 0; i < error.error?.messages?.length; i = i + 1) {
              this.toaster.error(error.error?.messages[i]?.content);
              console.log(error.error?.messages[i]?.content);
            }
          });
    }
  }
}
