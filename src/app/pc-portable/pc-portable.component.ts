import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {
articles:Article[]=[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.getAllArticle();
  }

  getAllArticle(){
   this.articles=this.articleService.getArticleBySousCat("PC Portable");
  }


}
