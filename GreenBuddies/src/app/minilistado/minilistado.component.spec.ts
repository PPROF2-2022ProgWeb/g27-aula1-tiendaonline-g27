import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinilistadoComponent } from './minilistado.component';

describe('MinilistadoComponent', () => {
  let component: MinilistadoComponent;
  let fixture: ComponentFixture<MinilistadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinilistadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinilistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
