import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-album-card',
  templateUrl: './single-album-card.component.html',
  styleUrls: ['./single-album-card.component.css']
})
export class SingleAlbumCardComponent implements OnInit {
  @Input() album;
  constructor() { }

  ngOnInit() {
  }

}
