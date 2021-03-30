import { Component, OnInit } from '@angular/core';
import { BeersService, IBeer } from '../beers.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public beers: IBeer[] = undefined;
  public errorMessage: string = '';

  constructor(private beersService: BeersService) { }
  
  public ngOnInit(): void {
    this.fetchBeer();
  }

  public async fetchBeer() {
    this.beers = await this.beersService.getBeers();
    this.errorMessage = this.beersService.getErrorMessage();
  }
}
