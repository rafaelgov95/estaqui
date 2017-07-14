import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionamentosComponent } from './estacionamentos.component';

describe('EstacionamentosComponent', () => {
  let component: EstacionamentosComponent;
  let fixture: ComponentFixture<EstacionamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacionamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
