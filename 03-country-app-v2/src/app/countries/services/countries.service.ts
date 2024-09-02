import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    apiUrl = 'https://restcountries.com/v3.1';

    public cacheStore: CacheStore = {
        byCapital: { term: '', countries: [] },
        byCountry: { term: '', countries: [] },
        ByRegion: { region: undefined, countries: [] },
    };

    constructor(private httpClient: HttpClient) {
        this.getFromLocalStorage();
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
    }

    private getFromLocalStorage(): void {
        const cacheStore = localStorage.getItem('cacheStore');
        if (cacheStore) {
            this.cacheStore = JSON.parse(cacheStore);
        }
    }

    private getCountriesRequest(query: string): Observable<Country[]> {
        const url = `${this.apiUrl}/${query}`;
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError((error) => of([])),
                // delay(1000),
            );
    }

    searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
        const url = `${this.apiUrl}/alpha/${alphaCode}`;
        return this.httpClient.get<Country[]>(url).pipe(
            // map(countries => countries.length > 0 ? countries[0] : null),
            map(([country]) => country),
            catchError((error) => of(null)),
        );
    }

    seachCapital(query: string): Observable<Country[]> {
        return this.getCountriesRequest(`capital/${query}`).pipe(
            tap(countries => this.cacheStore.byCapital = { term: query, countries }),
            tap(() => this.saveToLocalStorage()),
        );
    }

    searchCountry(query: string): Observable<Country[]> {
        return this.getCountriesRequest(`name/${query}`).pipe(
            tap(countries => this.cacheStore.byCountry = { term: query, countries }),
            tap(() => this.saveToLocalStorage()),
        );
    }

    searchRegion(region: Region): Observable<Country[]> {
        return this.getCountriesRequest(`region/${region}`).pipe(
            tap(countries => this.cacheStore.ByRegion = { region, countries }),
            tap(() => this.saveToLocalStorage()),
        );
    }

}