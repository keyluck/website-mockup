import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedCardsComponent } from './med-cards.component';

describe('MedCardsComponent', () => {
  let component: MedCardsComponent;
  let fixture: ComponentFixture<MedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
