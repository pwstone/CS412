import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-description-data',
  templateUrl: './description-data.component.html',
  styleUrls: ['./description-data.component.css']
})
export class DescriptionDataComponent implements OnInit {
  @Input() currentNews;
  constructor() { }

  ngOnInit(): void {
  }

}
