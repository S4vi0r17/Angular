import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    apiUrl = 'https://restcountries.com/v3.1';

    constructor(private httpClient: HttpClient) { }

    searchCountryByAlphaCode(alphaCode: string): Observable<Country[]> {
        const url = `${this.apiUrl}/alpha/${alphaCode}`;
        return this.httpClient.get<Country[]>(url).pipe(
            catchError((error) => of([])),
        );
    }

    seachCapital(query: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${query}`;
        return this.httpClient.get<Country[]>(url).pipe(
            catchError((error) => of([])),
        );
    }

    searchCountry(query: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${query}`;
        return this.httpClient.get<Country[]>(url).pipe(
            catchError((error) => of([])),
        );
    }

    searchRegion(region: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${region}`;
        return this.httpClient.get<Country[]>(url).pipe(
            catchError((error) => of([])),
        );
    }

}