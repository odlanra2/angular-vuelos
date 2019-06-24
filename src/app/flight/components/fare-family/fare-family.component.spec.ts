import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FareFamilyComponent } from './fare-family.component';

describe('FareFamilyComponent', () => {
  let component: FareFamilyComponent;
  let fixture: ComponentFixture<FareFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FareFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FareFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
