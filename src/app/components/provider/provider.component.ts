import { IProvider } from '../../models/provider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  provider: IProvider;

  constructor(private providerService: ProviderService,
    private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      let providerId = params['id'];
      this.providerService.getProvider(providerId).subscribe(provider => this.provider = provider);
    });
  }

}
