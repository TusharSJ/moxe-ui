import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHospital } from 'src/app/models/hospital';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  hospital: IHospital;

  constructor(
    private hospitalService: HospitalService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      let hospitalId = params['id'];
      this.hospitalService.getHospital(hospitalId).subscribe(hospital => this.hospital = hospital);
    });
  }

}
 