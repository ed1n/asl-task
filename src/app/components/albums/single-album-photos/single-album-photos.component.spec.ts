import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAlbumPhotosComponent } from './single-album-photos.component';

describe('SingleAlbumPhotosComponent', () => {
  let component: SingleAlbumPhotosComponent;
  let fixture: ComponentFixture<SingleAlbumPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAlbumPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAlbumPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
