import { NewProvider } from '../models/provider';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProvider } from '../models/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(protected http: HttpClient) {}

  getProviders(hospitalId: number) {
    return this.http.get<IProvider[]>(`/api/providers?hospitalId.equals=${hospitalId}`);
  }

  getProvider(id: string) {
    return this.http.get<IProvider>(`/api/providers/${id}`);
  }

  add(provider: NewProvider) {
    return this.http.post<IProvider>('/api/providers', provider);
  }

  update(provider: IProvider) {
    return this.http.put<IProvider>(`/api/providers/${provider.id}`, provider);
  }
}
