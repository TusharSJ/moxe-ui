import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientDialog } from './update-patient.component';

describe('UpdatePatientComponent', () => {
  let component: UpdatePatientDialog;
  let fixture: ComponentFixture<UpdatePatientDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
