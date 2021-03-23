import { Component, OnInit } from '@angular/core';
import {  Articles } from '../model/articles';
import { PcportableService } from '../service/pcportable.service';


@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {
  articles: Articles[] = [];
  constructor(private pcportableService: PcportableService) { }

  ngOnInit(): void {
    this.pcportableService.getAll().subscribe(res => {
      this.articles = res;
      console.log(res);
      });

  }



}
