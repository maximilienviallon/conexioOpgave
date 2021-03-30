import { Component } from '@angular/core';
import { BeersService, IBeer } from './beers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public beers: IBeer[] = undefined;
  public filteredBeers = undefined;
  public errorMessage: string = '';

  constructor(private beersService: BeersService) { }
  
  public ngOnInit(): void {
    this.fetchBeer();
  }

  public async fetchBeer() {
    this.beers = await this.beersService.getBeers();
    this.errorMessage = this.beersService.getErrorMessage();

    this.filteredBeers = this.beers;
  }
  
  public search(searchQuery): void {
    if (searchQuery === '') {
      this.filteredBeers = this.beers;
    } else {
      const lowercaseSearchQuery = searchQuery.toLocaleLowerCase();
      const filteredBeers = [];
      
      for (const beer of this.beers) {
        if (beer.name.toLocaleLowerCase().includes(lowercaseSearchQuery)) {
          filteredBeers.push(beer);
        }

        if (beer.styleName.toLocaleLowerCase().includes(lowercaseSearchQuery)) {
          const beerAlreadyAdded = !!filteredBeers.find(item => item.id === beer.id);
          
          if (!beerAlreadyAdded) {
            filteredBeers.push(beer);
          }
        }

        if (beer.categoryName.toLocaleLowerCase().includes(lowercaseSearchQuery)) {
          const beerAlreadyAdded = !!filteredBeers.find(item => item.id === beer.id);
          
          if (!beerAlreadyAdded) {
            filteredBeers.push(beer);
          }
        }
      }

      this.filteredBeers = filteredBeers;
    }
  }
}
