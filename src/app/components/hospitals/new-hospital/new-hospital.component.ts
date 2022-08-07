import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.scss']
})
export class NewHospitalDialog implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<NewHospitalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {}

}
