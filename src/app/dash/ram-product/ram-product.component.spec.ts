import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamProductComponent } from './ram-product.component';

describe('RamProductComponent', () => {
  let component: RamProductComponent;
  let fixture: ComponentFixture<RamProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
