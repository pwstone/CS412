import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-data',
  templateUrl: './title-data.component.html',
  styleUrls: ['./title-data.component.css']
})
export class TitleDataComponent implements OnInit {
  @Input() currentNews;
  constructor() { }

  ngOnInit(): void {
  }

}
