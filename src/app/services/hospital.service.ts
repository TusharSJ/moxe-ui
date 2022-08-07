import { Injectable } from '@angular/core';
import { IHospital } from '../models/hospital';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(protected http: HttpClient) {}

  getHospitals() {
    return this.http.get<IHospital[]>('/api/hospitals');
  }

  getHospital(id: string) {
    return this.http.get<IHospital>(`/api/hospitals/${id}`);
  }

  add(hospital: IHospital) {
    return this.http.post<IHospital>('/api/hospitals', hospital);
  }

  update(hospital: IHospital) {
    return this.http.put<IHospital>(`/api/hospitals/${hospital.id}`, hospital);
  }
}
