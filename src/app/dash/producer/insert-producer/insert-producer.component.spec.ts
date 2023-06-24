import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProducerComponent } from './insert-producer.component';

describe('InsertProducerComponent', () => {
  let component: InsertProducerComponent;
  let fixture: ComponentFixture<InsertProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertProducerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
