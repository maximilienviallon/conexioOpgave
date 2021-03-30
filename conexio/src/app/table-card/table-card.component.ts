import { Component, Input } from '@angular/core';
import { IBeer } from '../table/table.component';
import { beerFilterPipe } from '../table-card/table-card-filter.pipe'
@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent {
  @Input() beer: IBeer;
}
