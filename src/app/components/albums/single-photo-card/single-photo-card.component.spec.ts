import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhotoCardComponent } from './single-photo-card.component';

describe('SinglePhotoCardComponent', () => {
  let component: SinglePhotoCardComponent;
  let fixture: ComponentFixture<SinglePhotoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePhotoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePhotoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
