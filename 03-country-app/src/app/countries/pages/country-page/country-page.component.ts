import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     const id = params['id'];
  //     this.countriesService.searchCountryByAlphaCode(id).subscribe((country) => {
  //       console.log(country);
  //     });
  //   });
  // }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe((country) => {
        if (!country) {
          this.router.navigateByUrl('/countries');
          return;
        }

        this.country = country;
      });
  }
}
