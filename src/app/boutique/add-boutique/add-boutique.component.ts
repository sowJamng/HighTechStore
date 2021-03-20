import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boutique } from 'src/app/model/boutique';
import { BoutiqueService } from 'src/app/service/boutique.service';

@Component({
  selector: 'app-add-boutique',
  templateUrl: './add-boutique.component.html',
  styleUrls: ['./add-boutique.component.css']
})
export class AddBoutiqueComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
   
  }

}
