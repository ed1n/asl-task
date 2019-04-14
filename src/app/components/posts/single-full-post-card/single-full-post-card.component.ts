import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-full-post-card',
  templateUrl: './single-full-post-card.component.html',
  styleUrls: ['./single-full-post-card.component.css']
})
export class SingleFullPostCardComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

}
