import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent implements OnInit {

  articles:Article[]=[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    //this.getAllArticle();
  }

  // getAllArticle(){
  //  this.articles=this.articleService.getArticleBySousCat("Burreau");
  // }

}
