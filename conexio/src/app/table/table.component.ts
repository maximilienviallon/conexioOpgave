import { getLocaleNumberFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { BaseRouteReuseStrategy } from '@angular/router';

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
  @Input() beer: IBeer[];
  public beers: any;
  
  constructor() { }
  ngOnInit(): void {
    this.beers.getBeer();
  }
  
  
  async getBeer() {
    try {
      const response = await axios.get('https://conexioaps-beer.azurewebsites.net/index.html');
      response.headers('Access-Control-Allow-Origin', 'true');
      console.log(response);
    } catch (error) {
      console.error(error);
    
    }
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
      name: 'yo',
      style: 'Blonde',
      category: 'Category 2',
      brewingHouse: 'C3PO',
      abv: 42,
      ibu: 2
    }
  ];
}
