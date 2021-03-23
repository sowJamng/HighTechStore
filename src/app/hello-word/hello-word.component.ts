import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-hello-word',
  templateUrl: './hello-word.component.html',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent implements OnInit {
  isColorChanged: boolean = false;
  article={nom:"chemise",
  taile:40,
  message:"Achat pas encore effectué",
  confirmation:false};
articles=[
    {
      nom:"chemise",
    taile:40,
    message:"Achat pas encore effectué",
    confirmation:false},

{
  nom:"role",
  taile:40,
  message:"Achat pas encore effectué",
  confirmation:false
    },
   {  nom:"jeans",
    taile:40,
    message:"Achat pas encore effectué",
    confirmation:false
  }
  ];

  nombreArticles:string='1';
nomcategorie:string="";
@Input()prix: number=0;
@Input() categorie:string="";
  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(HomeComponent,{static :false}) child:HomeComponent | any;
  ngAfterViewInit():void{console.log(this.child.categorie)}
  clique(){
    alert('vous avez cliquè sur le boutton')
  }
  onAchatArticle(){
    this.article.confirmation=true;
    this.article.message="achat effectué avec succees"
  }
onclick(){
  this.isColorChanged=!this.isColorChanged;
}
onchoicate(e:Event){
  this.nomcategorie=(<HTMLInputElement>e.target).value;

}
}
