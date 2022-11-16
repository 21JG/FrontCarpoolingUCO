import { Component, Inject, OnInit } from '@angular/core';
import {
  CustomerModel,
  RouteRequestDTOModel,
} from '../../model/route-request.model';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { RouteRequestService } from 'src/Services/route-request.service';
import { DialogData } from 'src/model/dialog-data.model';
import { CustomerService } from 'src/Services/customer.service';
import { PeriodicElement } from 'src/model/periodic-element.model';
import { IdService } from 'src/Services/id.service';
import {ToastrService} from "ngx-toastr";
const { v4: uuid } = require('uuid');

@Component({
  selector: 'peticion-ruta',
  templateUrl: './PeticionRuta.component.html',
  styleUrls: ['./PeticionRuta.component.css'],
})
export class PeticionRutaComponent implements OnInit {
  requestList: RouteRequestDTOModel[] = [];

  displayedColumns: string[] = ['position', 'name', 'origin', 'end', 'estado'];

  constructor(
    public dialog: MatDialog,
    private routeRequestService: RouteRequestService,
    private toaster:ToastrService
  ) {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
    dialogRef.afterClosed().subscribe((response) => {
      if (response == 'created') {
        this.getRouteRequest();
      }
    });
  }
  getRouteRequest() {
    this.routeRequestService.getAllRouteRequest().subscribe((res) => {
          this.requestList = res.data;
        },
        (error) => {
          for(let i =0;i<error.error?.messages?.length;i=i+1){
            this.toaster.error(error.error?.messages[i]?.content);
            console.log(error.error?.messages[i]?.content);
          }
        });
  }

  title = 'CarpoolingUCO';

  ngOnInit(): void {
    this.getRouteRequest();
  }
}

@Component({
  selector: 'dialog-data-example',
  templateUrl: './PeticionRutacomponent.html',
})
export class DialogDataExampleDialog implements OnInit {
  newId: string = uuid();
  costumerList: CustomerModel[] = [];
  dateTimeRequest: string = '';
  originPoint: string = '';
  finishPoint: string = '';
  costumer: CustomerModel = {};
  status: string = 'pendiente';
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<DialogDataExampleDialog>,
    private routeRequestService: RouteRequestService,
    private customerService: CustomerService,
    private idService: IdService,
    private toaster:ToastrService
  ) {}

  createRouteRequest() {
    let bodyRequest: RouteRequestDTOModel = {
      id:this.newId,
      routeRequestEnd: this.finishPoint,
      routeRequestOrigin: this.originPoint,
      customer: this.costumer,
      serviceRequestDate: this.dateTimeRequest.split('T')[0],
      serviceRequestTime: this.dateTimeRequest.split('T')[1],
      status: this.status,
    };
    this.routeRequestService.createNewRouteRequest(bodyRequest).subscribe(
      (res) => {
        for(let i =0;i<res.messages?.length;i=i+1){
          this.toaster.success(res.messages[i]?.content);
        }
      },
      (error) => {
        for(let i =0;i<error.error?.messages?.length;i=i+1){
          this.toaster.error(error.error?.messages[i]?.content);
          console.log(error.error?.messages[i]?.content);
        }
      }
    );
  }

  ngOnInit(): void {
    this.idService.id.subscribe((costumer) => {
      this.costumer = costumer;
    });
  }
}
