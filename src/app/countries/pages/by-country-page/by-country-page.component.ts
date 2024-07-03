import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  public searchByCountryName(countryRequest: string): void {
    console.log(countryRequest);
    this.countryService.searchCountry(countryRequest)
    .subscribe(countriesResponse =>
      this.countries = countriesResponse.filter(
        country => country.name.common != null
        //&& country.name.common == countryRequest
      )
    )
  }

}
