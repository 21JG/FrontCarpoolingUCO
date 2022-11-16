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
    private routeRequestService: RouteRequestService
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
  newId: number = 0;
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
    private idService: IdService
  ) {}

  createRouteRequest() {
    let bodyRequest: RouteRequestDTOModel = {
      id: this.newId,
      routeRequestEnd: this.finishPoint,
      routeRequestOrigin: this.originPoint,
      customer: this.costumer,
      serviceRequestDate: this.dateTimeRequest.split('T')[0],
      serviceRequestTime: this.dateTimeRequest.split('T')[1],
      status: this.status,
    };
    console.log(bodyRequest);
    this.routeRequestService.createNewRouteRequest(bodyRequest).subscribe(
      (res) => {
        console.log('Se creó correctamente');
        this.dialogRef.close('created');
      },
      (error) => {
        console.error('Ocurrió un error');
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.idService.id.subscribe((costumer) => {
      this.costumer = costumer;
    });
  }
}
