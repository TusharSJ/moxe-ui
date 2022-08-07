import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IHospital } from 'src/app/models/hospital';

@Component({
  selector: 'update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.scss']
})
export class UpdateHospitalDialog implements OnInit {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateHospitalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IHospital,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(this.data.id),
      name: new FormControl(this.data.name, [Validators.required]),
      description: new FormControl(this.data.description)
    });
  }

}
