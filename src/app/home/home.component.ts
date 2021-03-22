import { Article } from './../model/article';
import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../service/articles.service';
import { Articles } from '../model/articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

tab:Array<string>=['pc Portable','PC Accessoires'];
data:any;
p1=1000; p2=100;
  articles:Articles[]=[];
  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.getAllArticle();

  }
getAllArticle(){
  this.articleService.getArticles().subscribe(data=>{
    this.articles=data;
  },err=>console.log(err));

}
addCart(){

  this.articleService.sendClickEvent();
}


}
