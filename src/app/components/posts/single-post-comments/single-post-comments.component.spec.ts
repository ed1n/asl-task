import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostCommentsComponent } from './single-post-comments.component';

describe('SinglePostCommentsComponent', () => {
  let component: SinglePostCommentsComponent;
  let fixture: ComponentFixture<SinglePostCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
