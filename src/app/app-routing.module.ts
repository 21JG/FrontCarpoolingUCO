import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeticionRutaComponent } from './peticion-ruta/PeticionRuta.component';
import {LoginGuard} from "./guards/login-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'carpooling/login', pathMatch: 'full' },
  { path: 'carpooling', redirectTo: 'carpooling/login', pathMatch: 'full' },
  {
    path: 'carpooling',

    children: [
      {
        path: 'request',
        canActivate: [LoginGuard],
        loadChildren: () =>
          import('./peticion-ruta/PeticionRuta.module').then(
            (m) => m.PeticionRutaModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      // preloadingStrategy: PreloadAllModules,
      // preloadingStrategy: QuicklinkStrategy,
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'corrected',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers:[LoginGuard]
})
export class AppRoutingModule {}
