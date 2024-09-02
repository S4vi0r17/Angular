import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  public initialInputValue: string = '';

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialInputValue = this.countriesService.cacheStore.byCapital.term
  }

  searchByCapital(term: string): void {

    this.isLoading = true;

    this.countriesService.seachCapital(term)
      .subscribe(
        countries => {
          this.countries = countries;
          this.isLoading = false;
        }
      );
  }
}
