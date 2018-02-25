import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-button',
  templateUrl: './hidden-button.component.html',
  styleUrls: ['./hidden-button.component.css']
})
export class HiddenButtonComponent implements OnInit {

  showParagraphBoolean = true;
  index = 0;
  timeStamps: Date [] = [];

  showParagraph() {
    this.showParagraphBoolean = ! this.showParagraphBoolean;
    this.timeStamps.push((new Date));
    /*Was unable to parse event.Timestamp into a regular date.*/
  }

  constructor() { }

  ngOnInit() {
  }

}
