import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFixComponent } from './phone-fix.component';

describe('PhoneFixComponent', () => {
  let component: PhoneFixComponent;
  let fixture: ComponentFixture<PhoneFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneFixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
