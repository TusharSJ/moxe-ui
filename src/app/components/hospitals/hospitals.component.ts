import { Component, OnInit } from '@angular/core';
import { IHospital } from 'src/app/models/hospital';
import { HospitalService } from 'src/app/services/hospital.service';
import {MatDialog} from '@angular/material/dialog';
import { NewHospitalDialog } from './new-hospital/new-hospital.component';
import { UpdateHospitalDialog } from './update-hospital/update-hospital.component';


@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {

  hospitals: IHospital[] = [];
  displayedColumns: string[] = ['name', 'description', 'actions'];

  constructor(
    private hospitalService: HospitalService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchHospitals();
  }

  fetchHospitals() {
    this.hospitalService.getHospitals()
    .subscribe( hospitals => this.hospitals = hospitals );
  }

  newHospital() {
    const dialogRef = this.dialog.open(NewHospitalDialog, {
      width: '380px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.hospitalService.add(result)
        .subscribe( {
          next: (res) => this.fetchHospitals(),
          error: (err) => console.log('Error occured while saving new hospital')
        });
      }
    });
  }

  updateHospital(hospital: IHospital) {
    const dialogRef = this.dialog.open(UpdateHospitalDialog, {
      width: '380px',
      data: hospital
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.hospitalService.update(result)
        .subscribe( {
          next: (res) => this.fetchHospitals(),
          error: (err) => console.log('Error occured while updating hospital')
        });
      }
    });
  }
}
