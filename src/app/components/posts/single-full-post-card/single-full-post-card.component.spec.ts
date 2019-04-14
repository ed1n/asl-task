import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFullPostCardComponent } from './single-full-post-card.component';

describe('SingleFullPostCardComponent', () => {
  let component: SingleFullPostCardComponent;
  let fixture: ComponentFixture<SingleFullPostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleFullPostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFullPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
