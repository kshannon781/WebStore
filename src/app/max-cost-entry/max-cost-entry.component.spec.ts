import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxCostEntryComponent } from './max-cost-entry.component';

describe('MaxCostEntryComponent', () => {
  let component: MaxCostEntryComponent;
  let fixture: ComponentFixture<MaxCostEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxCostEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxCostEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
