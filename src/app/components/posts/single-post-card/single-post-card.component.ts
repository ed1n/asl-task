import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-post-card',
  templateUrl: './single-post-card.component.html',
  styleUrls: ['./single-post-card.component.css']
})
export class SinglePostCardComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

}
