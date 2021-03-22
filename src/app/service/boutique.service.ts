import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boutique } from '../model/boutique';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  baseUrl ="http://localhost:8080/HighTechShopApi/rest/boutiques";

  constructor(private http:HttpClient) { }

  getBoutiques():Observable<any>{
    return this.http.get(this.baseUrl);

  }
  addBoutique(boutique: Boutique):Observable<any>{
    console.log(JSON.stringify(boutique));
   return this.http.post<Boutique>(this.baseUrl,boutique);
  }
  updateBoutique(boutique: Boutique){
      this.http.put(this.baseUrl, boutique);
  }
  deleteBoutique(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
