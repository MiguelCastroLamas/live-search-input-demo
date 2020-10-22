import { Component, OnInit } from '@angular/core';
import { Country } from './common/model/interfaces/country';
import { CountriesService } from './common/services/countries.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  countriesSearchInputValue: string;
  minimumSearchCharacters: number;
  countries: Country[];
  loadingSelectedCountry: boolean;
  delaySearchingCountry: number; // TODO: [Quit] -> It is needed to see the "loading" status of the input

  constructor(
    private api: CountriesService,
  ) {
    this.minimumSearchCharacters = environment.minimum_search_characters;
    this.delaySearchingCountry = environment.seconds_delay_searching;
  }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-20
   * @description Callback of "app-live-search-input" input change
   * @param       value object with search input value
   */
  onCountriesInputChange({ value }): void {
    this.countriesSearchInputValue = value;
    if (this.countriesSearchInputValue != null && this.countriesSearchInputValue.trim() !== ''
      && this.countriesSearchInputValue.length >= this.minimumSearchCharacters) {
      this.api.get_countries(this.countriesSearchInputValue)
        .subscribe((countries: Country[]) => {
          this.countries = countries;
        }, (error) => {
          // TODO: Handle controlled errors
          this.countries = [];
        });
    } else {
      this.countries = [];
    }

  }

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-20
   * @description Callback of "app-live-search-input" country selected
   * @param       name object with country name selected
   */
  onSelectCountry({ name }): void {
    this.loadingSelectedCountry = true;
    console.log('%cCiudad seleccionada: %c%s', 'font-style: italic', 'text-decoration: underline; color:blue;', name);

    // TODO: [Quit] -> It is needed to see the "loading" status of the input
    setTimeout(() => {
      this.loadingSelectedCountry = false;
      this.countriesSearchInputValue = name;
      this.countries = [];
    }, this.delaySearchingCountry * 1000);

  }

  ngOnInit(): void { }
}
