import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCommentCardComponent } from './single-comment-card.component';

describe('SingleCommentCardComponent', () => {
  let component: SingleCommentCardComponent;
  let fixture: ComponentFixture<SingleCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCommentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
