import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantiaYDevolucionesComponent } from './garantia-y-devoluciones.component';

describe('GarantiaYDevolucionesComponent', () => {
  let component: GarantiaYDevolucionesComponent;
  let fixture: ComponentFixture<GarantiaYDevolucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarantiaYDevolucionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarantiaYDevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
