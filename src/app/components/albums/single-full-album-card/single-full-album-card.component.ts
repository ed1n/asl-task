import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-full-album-card',
  templateUrl: './single-full-album-card.component.html',
  styleUrls: ['./single-full-album-card.component.css']
})
export class SingleFullAlbumCardComponent implements OnInit {
  @Input() album;
  constructor() { }

  ngOnInit() {
  }

}
