import { Component, Input } from '@angular/core';
import { IBeer } from '../beers.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() beers: IBeer[];
  @Input() errorMessage: string;
}
