import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Boutique} from '../model/boutique';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  readonly rootUrl = "http://localhost:8080/shop/rest/admin";

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) {
  }
  private boutiques : Boutique[];
  boutiqueSubject = new Subject<Boutique[]>();

  emitBoutique() {
    this.boutiqueSubject.next(this.boutiques.slice());
  }

  addBoutique(boutique: Boutique) {
    this.boutiques.push(boutique);
    this.emitBoutique();
  }

}
