import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
 @Input() searchTerm: string;
  constructor() { }

  ngOnInit(): void {
  }

}
