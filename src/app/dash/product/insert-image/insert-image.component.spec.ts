import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertImageComponent } from './insert-image.component';

describe('InsertImageComponent', () => {
  let component: InsertImageComponent;
  let fixture: ComponentFixture<InsertImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
