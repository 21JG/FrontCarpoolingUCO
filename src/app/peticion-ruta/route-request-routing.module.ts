import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PeticionRutaComponent } from './PeticionRuta.component';

const routes: Routes = [
  {
    path: '',
    component: PeticionRutaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class RequestRouteRoutingModule {}
