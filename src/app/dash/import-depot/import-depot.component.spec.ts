import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDepotComponent } from './import-depot.component';

describe('ImportDepotComponent', () => {
  let component: ImportDepotComponent;
  let fixture: ComponentFixture<ImportDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
