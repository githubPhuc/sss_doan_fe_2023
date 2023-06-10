import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsdProductComponent } from './ssd-product.component';

describe('SsdProductComponent', () => {
  let component: SsdProductComponent;
  let fixture: ComponentFixture<SsdProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsdProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsdProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
