import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxGroupsCostEntryComponent } from './max-groups-cost-entry.component';

describe('MaxGroupsCostEntryComponent', () => {
  let component: MaxGroupsCostEntryComponent;
  let fixture: ComponentFixture<MaxGroupsCostEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxGroupsCostEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxGroupsCostEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
