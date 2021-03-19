import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boutique } from 'src/app/model/boutique';
import { BoutiqueService } from 'src/app/service/boutique.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
   
  }

}
