import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegranteCard } from './integrante-card';

describe('IntegranteCard', () => {
  let component: IntegranteCard;
  let fixture: ComponentFixture<IntegranteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegranteCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegranteCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
