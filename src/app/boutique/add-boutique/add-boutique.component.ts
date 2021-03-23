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

  boutique:Boutique={
    id:1,
    desc:'',
    phone:'',
    email:'',
    adress:''
  };

    constructor(private boutiqueService:BoutiqueService,private router:Router) { }

    ngOnInit(): void {
      this.reloadData();
    }
    onAddBoutique() {
      this.boutiqueService.addBoutique(this.boutique).subscribe(data=>{
        console.log(data);

      },
      err=>console.log(err));
      this.router.navigateByUrl('/boutiques');
   }

   reloadData(){
     this.boutiqueService.getBoutiques().subscribe(data=>{
       console.log(data);
     },err=>console.log(err));
   }

}
