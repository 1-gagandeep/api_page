import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  topHeadLines:any[] = []
  constructor(private apiService:NewsapiService) {this.loadData()}

  loadData(){
    
  }

  ngOnInit() {
      return this.apiService.getTopHeadLines().subscribe((results) => {
        this.topHeadLines.push(...results.articles)
        console.log(this.topHeadLines)
      });
  }

  

}
