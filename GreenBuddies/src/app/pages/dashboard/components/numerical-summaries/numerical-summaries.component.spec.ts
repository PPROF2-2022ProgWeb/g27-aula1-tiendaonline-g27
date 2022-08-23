import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericalSummariesComponent } from './numerical-summaries.component';

describe('NumericalSummariesComponent', () => {
  let component: NumericalSummariesComponent;
  let fixture: ComponentFixture<NumericalSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericalSummariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericalSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
