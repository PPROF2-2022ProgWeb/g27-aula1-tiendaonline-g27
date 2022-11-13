import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmHorizontalCardComponent } from './sm-horizontal-card.component';

describe('SmHorizontalCardComponent', () => {
  let component: SmHorizontalCardComponent;
  let fixture: ComponentFixture<SmHorizontalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmHorizontalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmHorizontalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
