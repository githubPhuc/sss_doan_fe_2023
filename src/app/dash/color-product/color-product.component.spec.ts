import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorProductComponent } from './color-product.component';

describe('ColorProductComponent', () => {
  let component: ColorProductComponent;
  let fixture: ComponentFixture<ColorProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
