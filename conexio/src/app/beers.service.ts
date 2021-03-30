import { Injectable } from '@angular/core';
import axios from 'axios';

export interface IBeer {
  id: string;
  name: string;
  breweryName: string;
  categoryName: string;
  styleName: string;
  abv: number;
  ibu: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private beers: IBeer[] = [];
  private errorMessage = '';

  public async getBeers(): Promise<IBeer[]> {
    this.errorMessage = '';

    try {
      const { data } = await axios.get('https://conexioaps-beer.azurewebsites.net/Beer?take=10');
      this.beers = data.data;

      return this.beers;
    } catch (error) {
      this.errorMessage = error;
      return [];
    }
  }

  public getErrorMessage(): string {
    return this.errorMessage;
  }
}
