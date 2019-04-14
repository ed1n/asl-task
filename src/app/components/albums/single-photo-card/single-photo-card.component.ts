import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-photo-card',
  templateUrl: './single-photo-card.component.html',
  styleUrls: ['./single-photo-card.component.css']
})
export class SinglePhotoCardComponent implements OnInit {

  @Input() photo;
  @Output() showModal = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  openModal(image) {
    this.showModal.next(image);
  }

}
