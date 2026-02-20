import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assortment } from './assortment';

describe('Assortment', () => {
  let component: Assortment;
  let fixture: ComponentFixture<Assortment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Assortment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assortment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
