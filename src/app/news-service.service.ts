import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getNews} from './news-service.js';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  getNewsByTopic(topic: string) {
    return this.http.get('http://localhost:3000/news?topic=' + topic);
  }


}
