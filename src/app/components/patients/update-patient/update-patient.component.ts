import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPatient } from 'src/app/models/patient';
import { Sex } from 'src/app/models/sex.model';

@Component({
  selector: 'update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.scss']
})
export class UpdatePatientDialog implements OnInit {

  formGroup: FormGroup;
  options = [Sex.FEMALE, Sex.MALE, Sex.OTHER];

  constructor(
    public dialogRef: MatDialogRef<UpdatePatientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IPatient,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(this.data.id),
      name: new FormControl(this.data.name, [Validators.required]),
      sex: new FormControl(this.data.sex),
      dateOfBirth: new FormControl(this.data.dateOfBirth)
    });
  }

}
