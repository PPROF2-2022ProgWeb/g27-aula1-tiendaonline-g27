import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionUsuarioFinancieroComponent } from './informacion-usuario-financiero.component';

describe('InformacionUsuarioFinancieroComponent', () => {
  let component: InformacionUsuarioFinancieroComponent;
  let fixture: ComponentFixture<InformacionUsuarioFinancieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionUsuarioFinancieroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionUsuarioFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
