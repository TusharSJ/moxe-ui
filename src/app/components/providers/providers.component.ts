import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProvider, NewProvider } from 'src/app/models/provider';
import { ProviderService } from 'src/app/services/provider.service';
import { NewProviderDialog } from './new-provider/new-provider.component';
import { UpdateProviderDialog } from './update-provider/update-provider.component';

@Component({
  selector: 'providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  @Input() hospitalId: number;
  providers: IProvider[] = [];

  displayedColumns: string[] = ['name', 'specialty', 'actions'];

  constructor(
    private providerService: ProviderService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchProviders();
  }

  fetchProviders() {
    this.providerService.getProviders(this.hospitalId)
    .subscribe(providers => this.providers = providers);
  }

  newProvider() {
    const dialogRef = this.dialog.open(NewProviderDialog, {
      width: '380px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let newProvider: NewProvider = result;
        newProvider.hospital = {id: this.hospitalId};

        this.providerService.add(newProvider)
        .subscribe( {
          next: (res) => this.fetchProviders(),
          error: (err) => console.log('Error occured while saving new provider', err)
        });
      }
    });
  }

  updateProvider(provider: IProvider) {
    const dialogRef = this.dialog.open(UpdateProviderDialog, {
      width: '380px',
      data: provider
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let updatedProvider: IProvider = result;
        updatedProvider.hospital = {id: this.hospitalId};

        this.providerService.update(result)
        .subscribe( {
          next: (res) => this.fetchProviders(),
          error: (err) => console.log('Error occured while updating provider', err)
        });
      }
    });
  }

}
