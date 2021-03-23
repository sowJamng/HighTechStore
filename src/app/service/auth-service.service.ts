import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAuth = false;
   // admin:Admin= {
   //   email:'maodosowdev7@gmail.com',
   //   password:'maodo7'
   // };
     baseUrl:string="http://localhost:8080/HighTechShopApi/rest/admin";

     constructor(private http:HttpClient) { }
     signIn(adm: Admin){
      // if(this.http.get<any>(this.baseUrl+'/login/'+adm.email+'/'+adm.password))
      //        { this.isAuth = true;
      //          return true;
      //        }
      //  else
      //    return false;
      return new Promise(
        (resolve, reject) => {
          setTimeout(
            () => {
              if(this.http.get<any>(this.baseUrl+'/login/'+adm.email+'/'+adm.password))
             { this.isAuth = true;
               resolve(true);
             }
             else{
                resolve(false);
               }
            }, 2000
          );
        }
      );
    }
  login(adm:Admin):Observable<any>{
    if(this.http.get<any>(this.baseUrl+'/login/'+adm.email+'/'+adm.password))
             { this.isAuth = true;
             }
    return this.http.get(this.baseUrl+'/login/'+adm.email+'/'+adm.password);
  }
    getAdmins():Observable<any>{
      return this.http.get<any>(this.baseUrl);
    }
    signOut() {
      this.isAuth = false;
    }

    getClickAuth(){
      return this.isAuth;
    }



}
