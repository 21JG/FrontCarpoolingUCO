import { NgModule } from '@angular/core';

import {
  DialogDataExampleDialog,
  PeticionRutaComponent,
} from './PeticionRuta.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RequestRouteRoutingModule } from './route-request-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PeticionRutaComponent, DialogDataExampleDialog],
  imports: [
    CommonModule,
    RequestRouteRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [PeticionRutaComponent],
})
export class PeticionRutaModule {}
