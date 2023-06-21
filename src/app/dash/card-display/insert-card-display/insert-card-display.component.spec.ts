import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCardDisplayComponent } from './insert-card-display.component';

describe('InsertCardDisplayComponent', () => {
  let component: InsertCardDisplayComponent;
  let fixture: ComponentFixture<InsertCardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCardDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
