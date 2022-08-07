import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceAplicativoComponent } from './interface-aplicativo.component';

describe('InterfaceAplicativoComponent', () => {
  let component: InterfaceAplicativoComponent;
  let fixture: ComponentFixture<InterfaceAplicativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceAplicativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceAplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
