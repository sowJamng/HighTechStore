import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clickEventsubscription:Subscription;

  panier:number=0;
  constructor(private articleService:ArticleService) {
    this.clickEventsubscription=this.articleService.getClickEvent().subscribe(()=>{
      this.incrementCount();
      })
  }

  ngOnInit(): void {
  }
  incrementCount(){
    this.panier++;
    }

}
