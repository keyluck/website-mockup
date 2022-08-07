import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtlSupportComponent } from './rtl-support.component';

describe('RtlSupportComponent', () => {
  let component: RtlSupportComponent;
  let fixture: ComponentFixture<RtlSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtlSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtlSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
