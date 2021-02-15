import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-fix',
  templateUrl: './phone-fix.component.html',
  styleUrls: ['./phone-fix.component.css']
})
export class PhoneFixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddded(){
    alert('commande aoujeté au panier avec succes')
  }

}
