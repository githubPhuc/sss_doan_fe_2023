import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertImportDepotComponent } from './insert-import-depot.component';

describe('InsertImportDepotComponent', () => {
  let component: InsertImportDepotComponent;
  let fixture: ComponentFixture<InsertImportDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertImportDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertImportDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
