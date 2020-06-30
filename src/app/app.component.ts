import {Component, OnInit} from '@angular/core';
import {NewsServiceService as NewsService} from './news-service.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ps7';
  currentNews: {
    title: '',
    author: '',
    description: '',
    cache: ''
  };
  topic: string;

  newsControl: FormControl = new FormControl(Validators.minLength(1), Validators.required);

  newsFormGroup = this.form.group({
    topicControl: ['covid', Validators.required]
  });

  constructor(private newsService: NewsService, private form: FormBuilder) {}

  getNewsByTopic() {
    this.newsService.getNewsByTopic(this.topic);
    this.newsService.getNewsByTopic(this.topic).subscribe(
      response => {
        this.currentNews = {title: response['title'],
          author: response['author'],
          description: response['description'],
          cache: response['cache']
        };
      }
    );
  }
}
