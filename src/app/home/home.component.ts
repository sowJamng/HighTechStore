import { Article } from './../model/article';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles:Article[]=[];
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getAllArticle();
  }
getAllArticle(){
  this.articles=this.articleService.getAricles();
}
addCart(){

  this.articleService.sendClickEvent();
}
}