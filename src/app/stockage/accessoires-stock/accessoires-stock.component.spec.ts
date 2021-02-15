import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiresStockComponent } from './accessoires-stock.component';

describe('AccessoiresStockComponent', () => {
  let component: AccessoiresStockComponent;
  let fixture: ComponentFixture<AccessoiresStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoiresStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoiresStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
