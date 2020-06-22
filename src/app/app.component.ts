import {Component, OnInit} from '@angular/core';
import {ARTICLES} from './data/articleMOCK';
import {NEWS} from './data/news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListComponent implements OnInit{
  articles: NEWS[] = ARTICLES;
  selectedArticle: NEWS;

  ngOnInit(): void {
  }
  showDescription(title: string) {
    this.selectedArticle = this.articles.find(article => article.title === title);
  }
}
