import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgesoTwoComponent } from './barra-progeso-two.component';

describe('BarraProgesoTwoComponent', () => {
  let component: BarraProgesoTwoComponent;
  let fixture: ComponentFixture<BarraProgesoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraProgesoTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraProgesoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
