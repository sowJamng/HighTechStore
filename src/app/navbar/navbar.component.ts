import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleService } from '../service/article.service';
import { AuthServiceService } from '../service/auth-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  clickEventsubscription:Subscription;
  panier:number=0;
  isAuth=false;

  constructor(private authService:AuthServiceService ,private articleService:ArticleService,private router: Router) {
    this.clickEventsubscription=this.articleService.getClickEvent().subscribe(()=>{
      this.incrementCount();
      })
  }

  ngOnInit() {
        this.isAuth=this.authService.isAuth;
  }

  incrementCount(){
    this.panier++;
    }

}
