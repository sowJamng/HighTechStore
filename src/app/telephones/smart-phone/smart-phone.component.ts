import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent implements OnInit {

  articles:Article[]=[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    //this.getAllArticle();
  }

  // getAllArticle(){
  //  this.articles=this.articleService.getArticleBySousCat("smart");
  // }

}
