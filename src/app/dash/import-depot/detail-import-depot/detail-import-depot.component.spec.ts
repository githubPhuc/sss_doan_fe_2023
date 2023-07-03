import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailImportDepotComponent } from './detail-import-depot.component';

describe('DetailImportDepotComponent', () => {
  let component: DetailImportDepotComponent;
  let fixture: ComponentFixture<DetailImportDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailImportDepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailImportDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
