import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../service/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthontificationGuardGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean
  | Observable<boolean>| Promise<boolean>
  {​​
   return(new Promise(resolve=>{​​
    if(this.authService.isAuth) {
               resolve(true);
    }
       else {
         resolve(false);​​
         this.router.navigate(['/login']);
      }​​
     }​​));
    }
  // canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot):
  //  Observable<boolean> | Promise<boolean> | boolean  {
  //     if(this.authService.isAuth) {
  //       return true;
  //     } else {
  //       this.router.navigate(['/login']);
  //     }
  // }

}
