import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFullAlbumCardComponent } from './single-full-album-card.component';

describe('SingleFullAlbumCardComponent', () => {
  let component: SingleFullAlbumCardComponent;
  let fixture: ComponentFixture<SingleFullAlbumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFullAlbumCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFullAlbumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
