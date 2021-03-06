import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSearchComponent } from './content-search.component';

describe('ContentSearchComponent', () => {
  let component: ContentSearchComponent;
  let fixture: ComponentFixture<ContentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
