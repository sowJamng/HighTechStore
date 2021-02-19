import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() key: string="";
 keySearch:string="";
  articles:Article[]=[];
showCart:boolean=false;
prixTotal:number=0;
nbCart:number=0;
selectProducts:Article[]=[];
  constructor(private router:Router, private articleService:ArticleService) { }

  ngOnInit(): void {
    this.getAllArticle();
  //  reloadData()
  }

  getAllArticle(){
   this.articles=this.articleService.getArticleBySousCat(this.key,this.keySearch);
  }

   addCart(article:Article){
    this.articleService.sendClickEvent();
    this.showCart=true;
    this.prixTotal+=article.prix;
    this.selectProducts.push(article)
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
  // reloadData() {
  //   this.articles = this.articleService.getArticleList();
  // }

}
