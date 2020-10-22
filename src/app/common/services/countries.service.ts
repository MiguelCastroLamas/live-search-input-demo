import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../model/interfaces/country';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  endpoint: string;
  countries: Country[];

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = environment.api_rest_endpoint;
  }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-20
   * @description Search for the countries that contain the value of params
   * @param       value string
   * @returns     Country[]
   */
  get_countries(value: string): Observable<object> {
    const url = `${this.endpoint}/${value}`;
    return this.http.get<object>(url)
      .pipe(
        map(
          (raw: any[]): Country[] => {
            this.countries = [];

            for (const countryRaw of raw) {
              const country: Country = {} as Country;
              country.name = countryRaw.name;
              this.countries.push(country);
            }

            return this.countries;
          }));
  }
}
