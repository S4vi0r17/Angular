import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    apiUrl = 'https://restcountries.com/v3.1/capital/{capital}';

    constructor(private httpClient: HttpClient) { }

    seachCapital(query: string): Observable<Country[]> {
        const url = this.apiUrl.replace('{capital}', query);
        return this.httpClient.get<Country[]>(url);
    }

}