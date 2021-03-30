import {PipeTransform, Pipe} from '@angular/core';
import {IBeer} from '../table/table.component';
@Pipe({
    name: 'beerFilter'
})

export class beerFilterPipe implements PipeTransform{
    transform(beers: IBeer[], searchTerm: string): IBeer[]{
        if(!beers || !searchTerm){
            return beers
        }
        return beers.filter(beer => beer.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    }
}