import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertSaleComponent } from './insert-sale.component';

describe('InsertSaleComponent', () => {
  let component: InsertSaleComponent;
  let fixture: ComponentFixture<InsertSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
