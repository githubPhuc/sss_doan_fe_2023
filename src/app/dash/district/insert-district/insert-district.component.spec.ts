import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDistrictComponent } from './insert-district.component';

describe('InsertDistrictComponent', () => {
  let component: InsertDistrictComponent;
  let fixture: ComponentFixture<InsertDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDistrictComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
