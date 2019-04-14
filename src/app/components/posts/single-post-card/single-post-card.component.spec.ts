import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostCardComponent } from './single-post-card.component';

describe('SinglePostCardComponent', () => {
  let component: SinglePostCardComponent;
  let fixture: ComponentFixture<SinglePostCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
