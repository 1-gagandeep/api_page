import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

const API_KEY = environment.API_KEY
const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }

  getTopHeadLines():Observable<any>
  {
    return this.http.get(
     'https://newsapi.org/v2/top-headlines?country=us&apiKey=db22bb7fa86a4ff78bc5b1edd890fda2'
    )
  }
}