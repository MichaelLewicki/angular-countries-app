import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {};

  public searchByRegion(regionRequest: string): void {
    console.log(regionRequest);
    this.countriesService
      .searchRegion(regionRequest)
      .subscribe(countriesResponse =>
        this.countries = countriesResponse.filter(
          country => country.region != null
        )
      );
  };
}
