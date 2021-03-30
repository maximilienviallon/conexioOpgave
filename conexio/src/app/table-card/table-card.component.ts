import { Component, Input } from '@angular/core';
import { IBeer } from '../beers.service';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent {
  @Input() beer: IBeer;
}
