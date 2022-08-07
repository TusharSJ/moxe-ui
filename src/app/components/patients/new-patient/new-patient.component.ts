import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Sex } from 'src/app/models/sex.model';

@Component({
  selector: 'new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientDialog implements OnInit {

  options = [Sex.FEMALE, Sex.MALE, Sex.OTHER];

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    sex: new FormControl(''),
    dateOfBirth: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<NewPatientDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {}

}
