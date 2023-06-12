import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertWardsComponent } from './insert-wards.component';

describe('InsertWardsComponent', () => {
  let component: InsertWardsComponent;
  let fixture: ComponentFixture<InsertWardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertWardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertWardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
