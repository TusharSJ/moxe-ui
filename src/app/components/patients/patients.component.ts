import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPatient, NewPatient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { NewPatientDialog } from './new-patient/new-patient.component';
import { UpdatePatientDialog } from './update-patient/update-patient.component';

@Component({
  selector: 'patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  @Input() providerId: number;
  patients: IPatient[] = [];

  displayedColumns: string[] = ['name', 'sex', 'dob', 'actions'];

  constructor(
    private patientService: PatientService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients() {
    this.patientService.getPatients(this.providerId)
    .subscribe(patients => this.patients = patients);
  }

  newPatient() {
    const dialogRef = this.dialog.open(NewPatientDialog, {
      width: '380px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let newPatient: NewPatient = result;
        newPatient.provider = {id: this.providerId};

        this.patientService.add(newPatient)
        .subscribe( {
          next: (res) => this.fetchPatients(),
          error: (err) => console.log('Error occured while saving new patient', err)
        });
      }
    });
  }

  updatePatient(patient: IPatient) {
    const dialogRef = this.dialog.open(UpdatePatientDialog, {
      width: '380px',
      data: patient
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let updatedPatient: IPatient = result;
        updatedPatient.provider = {id: this.providerId};

        this.patientService.update(result)
        .subscribe( {
          next: (res) => this.fetchPatients(),
          error: (err) => console.log('Error occured while updating patient', err)
        });
      }
    });
  }

}
