import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCartaoComponent } from './tipo-cartao.component';

describe('TipoCartaoComponent', () => {
  let component: TipoCartaoComponent;
  let fixture: ComponentFixture<TipoCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCartaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
