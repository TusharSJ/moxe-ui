import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import { RouterModule } from '@angular/router';

import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ProviderComponent } from './components/provider/provider.component';
import { PatientsComponent } from './components/patients/patients.component';
import { NewHospitalDialog } from './components/hospitals/new-hospital/new-hospital.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateHospitalDialog } from './components/hospitals/update-hospital/update-hospital.component';
import {MatIconModule} from '@angular/material/icon';
import { UpdateProviderDialog } from './components/providers/update-provider/update-provider.component';
import { NewProviderDialog } from './components/providers/new-provider/new-provider.component';
import { NewPatientDialog } from './components/patients/new-patient/new-patient.component';
import { UpdatePatientDialog } from './components/patients/update-patient/update-patient.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    HospitalsComponent,
    ProvidersComponent,
    ProviderComponent,
    PatientsComponent,
    NewHospitalDialog,
    UpdateHospitalDialog,
    UpdateProviderDialog,
    NewProviderDialog,
    NewPatientDialog,
    UpdatePatientDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule,
    MatIconModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
