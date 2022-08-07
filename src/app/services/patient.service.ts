import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPatient, NewPatient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(protected http: HttpClient) {}

  getPatients(providerId: number) {
    return this.http.get<IPatient[]>(`/api/patients?providerId.equals=${providerId}`);
  }

  getPatient(id: string) {
    return this.http.get<IPatient>(`/api/patients/${id}`);
  }

  add(patient: NewPatient) {
    return this.http.post<IPatient>('/api/patients', patient);
  }

  update(patient: IPatient) {
    return this.http.put<IPatient>(`/api/patients/${patient.id}`, patient);
  }
}
