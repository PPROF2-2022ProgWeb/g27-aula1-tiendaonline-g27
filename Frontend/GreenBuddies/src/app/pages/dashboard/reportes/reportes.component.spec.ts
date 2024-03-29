import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesAdminComponent } from './reportes.component';

describe('ReportesComponent', () => {
  let component: ReportesAdminComponent;
  let fixture: ComponentFixture<ReportesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
