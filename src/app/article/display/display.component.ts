import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { Articles } from 'src/app/model/articles';
import { ArticlesService } from 'src/app/service/articles.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() key: string="";
 keySearch:string="";
  articles:Article[]=[];
  allarticles:Articles[]=[];
  data:any;
showCart:boolean=false;
prixTotal:number=0;
nbCart:number=0;
panier:Articles[]=[];
selectProducts:Article[]=[];
  constructor(private router:Router,private articleService: ArticlesService ) { }

  ngOnInit(): void {
    this.getAllArticle();

  }

  getAllArticle(){
   this.articleService.getArticleBySousCat( this.key).subscribe(data=>{
    this.articles=data;
    console.log(this.articles);
   },err=>console.log(err))
  }

   addCart(article:Article){
    this.articleService.sendClickEvent();
    this.showCart=true;
    this.prixTotal+=article.prix;
    this.selectProducts.push(article);
    this.nbCart++;
  }
  disbledSelected(article:Article){
    return this.selectProducts.includes(article);
  }
  removeSelected(a:Article){

    this.selectProducts.forEach((article,index)=>{
     if( article.id==a.id){
      this.selectProducts.splice(index,1);
      this.prixTotal-=article.prix;
      this.nbCart-=1;
     }
    });
  }
  articleDetails(id: number){
    this.router.navigate(['details', id]);
  }

getArticleByQuery(){
  if(this.keySearch===" ") this.getAllArticle();
  this.articleService.getArticleByMarque(this.keySearch).subscribe(data=>{
    this.articles=data;
  },err=>console.log(err));
}
  commander(){
     alert('commande efectuée avec succés');
  }

}
