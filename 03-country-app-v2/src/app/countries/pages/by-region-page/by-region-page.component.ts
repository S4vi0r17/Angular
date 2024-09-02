import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public selectedRegion?: Region

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.ByRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.ByRegion.region;
  }

  searchByRegion(term: Region): void {
    this.isLoading = true;
    this.selectedRegion = term;
    this.countriesService.searchRegion(term)
      .subscribe(
        countries => {
          this.countries = countries
          this.isLoading = false;
        }
      );
  }
}
