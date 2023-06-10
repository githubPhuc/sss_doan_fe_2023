import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuProductComponent } from './cpu-product.component';

describe('CpuProductComponent', () => {
  let component: CpuProductComponent;
  let fixture: ComponentFixture<CpuProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpuProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
