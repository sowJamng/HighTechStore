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
  boutique:Boutique={
    id:1,
    desc:'',
    phone:'',
    email:'',
    adress:''
  };
  boutiques:Boutique[]=[];
  constructor(private boutiqueService:BoutiqueService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  onDeleteBoutique(id:number) {
    this.boutiqueService.deleteBoutique(id).subscribe(data=>{
      console.log(data);

    },
    err=>console.log(err));
    this.reloadData();
 }
 onUpdateBoutique(boutique:Boutique) {
  this.boutiqueService.updateBoutique(boutique);
  this.reloadData();
}
 reloadData(){
   this.boutiqueService.getBoutiques().subscribe(data=>{
     console.log(data);
     this.boutiques=data;
   },err=>console.log(err));
 }

}
