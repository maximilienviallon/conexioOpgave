import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() search = new EventEmitter<string>();

  public searchQuery = new FormControl('');

  private subscription = new Subscription();

  public ngOnInit(): void {
    this.subscription.add(
      this.searchQuery.valueChanges.subscribe(searchQuery => {
        this.search.emit(searchQuery);
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
