import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddACardButtonComponent } from './add-a-card-button.component';

describe('AddACardButtonComponent', () => {
  let component: AddACardButtonComponent;
  let fixture: ComponentFixture<AddACardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddACardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddACardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
