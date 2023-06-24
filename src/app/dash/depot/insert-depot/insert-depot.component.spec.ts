import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDepotComponent } from './insert-depot.component';

describe('InsertDepotComponent', () => {
  let component: InsertDepotComponent;
  let fixture: ComponentFixture<InsertDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
