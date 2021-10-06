import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInlinestyleComponent } from './news-inlinestyle.component';

describe('NewsInlinestyleComponent', () => {
  let component: NewsInlinestyleComponent;
  let fixture: ComponentFixture<NewsInlinestyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsInlinestyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInlinestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
