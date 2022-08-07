import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProvider } from 'src/app/models/provider';

@Component({
  selector: 'update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.scss']
})
export class UpdateProviderDialog implements OnInit {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateProviderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IProvider,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      id: new FormControl(this.data.id),
      name: new FormControl(this.data.name, [Validators.required]),
      specialty: new FormControl(this.data.specialty)
    });
  }

}
