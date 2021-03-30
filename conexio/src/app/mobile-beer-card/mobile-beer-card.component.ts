import { Component, Input } from '@angular/core';
import { IBeer } from '../beers.service';

@Component({
  selector: 'app-mobile-beer-card',
  templateUrl: './mobile-beer-card.component.html',
  styleUrls: ['./mobile-beer-card.component.scss']
})
export class MobileBeerCardComponent {
  @Input() beer: IBeer
}
