import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementNotAvailable } from './element-not-available';

describe('ElementNotAvailable', () => {
  let component: ElementNotAvailable;
  let fixture: ComponentFixture<ElementNotAvailable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementNotAvailable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementNotAvailable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
