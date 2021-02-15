import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiresPhoneComponent } from './accessoires-phone.component';

describe('AccessoiresPhoneComponent', () => {
  let component: AccessoiresPhoneComponent;
  let fixture: ComponentFixture<AccessoiresPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoiresPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoiresPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
