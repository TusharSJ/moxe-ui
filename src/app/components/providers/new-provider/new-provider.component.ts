import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'new-provider',
  templateUrl: './new-provider.component.html',
  styleUrls: ['./new-provider.component.scss']
})
export class NewProviderDialog implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    specialty: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<NewProviderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {}

}
