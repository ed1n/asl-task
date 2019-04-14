import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-comment-card',
  templateUrl: './single-comment-card.component.html',
  styleUrls: ['./single-comment-card.component.css']
})
export class SingleCommentCardComponent implements OnInit {
  @Input() comment;
  constructor() { }

  ngOnInit() {
  }

}
