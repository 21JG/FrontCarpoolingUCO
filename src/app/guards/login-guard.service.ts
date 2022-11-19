import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {IdService} from "../../Services/id.service";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  login:boolean = false
  constructor(private idService:IdService, private router:Router) {
    this.idService.id.subscribe(res=>{
      if(res != undefined){
        console.log(res);
        this.login = true
      }
      console.log("out")
          });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.login){
      return true;
    }else{
      this.router.navigate(['carpooling/login'])
      return false;
    }
  }
  
}
