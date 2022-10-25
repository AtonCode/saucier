import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersServiceService } from './services/users-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  userService: UsersServiceService | undefined;
  router: Router | undefined;
  
  constructor(_userService: UsersServiceService, _router: Router,) {
    this.userService = _userService;
    this.router = _router;
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
    var pass: boolean = false;

    if(this.userService?.validarLogin() == true){
      pass = true;
    }else{
      alert('You need to login first');
      this.router?.navigate(['/login']);
      pass = false;
    }

    
    return pass;
  }

  
}
