import { Component, OnInit } from '@angular/core';

export interface IBeer {
  name: string;
  style: string;
  category: string;
  brewingHouse: string;
  abv: number;
  ibu: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public beerMockData: IBeer[] = [
    {
      name: 'Beer 1',
      style: 'Blonde',
      category: 'Category 1',
      brewingHouse: 'R2D2',
      abv: 1,
      ibu: 2
    },
    {
      name: 'Beer 2',
      style: 'Blonde',
      category: 'Category 2',
      brewingHouse: 'C3PO',
      abv: 42,
      ibu: 2
    }
  ];
}
