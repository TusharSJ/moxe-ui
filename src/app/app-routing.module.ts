import { ProviderComponent } from './components/provider/provider.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalsComponent } from './components/hospitals/hospitals.component';

const routes: Routes = [
  {
    path: 'hospital/:id',
    component: HospitalComponent
  },
  {
    path: 'provider/:id',
    component: ProviderComponent
  },
  {
    path: '',
    component: HospitalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
