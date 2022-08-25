import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalSummariesListComponent } from './numerical-summaries-list.component';

describe('NumericalSummariesListComponent', () => {
  let component: NumericalSummariesListComponent;
  let fixture: ComponentFixture<NumericalSummariesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericalSummariesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericalSummariesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
