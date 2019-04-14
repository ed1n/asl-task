import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAlbumCardComponent } from './single-album-card.component';

describe('SingleAlbumCardComponent', () => {
  let component: SingleAlbumCardComponent;
  let fixture: ComponentFixture<SingleAlbumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAlbumCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAlbumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
