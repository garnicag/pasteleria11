import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchSubmitEvent = new EventEmitter<string>();

  searchItem(value: string): void {
    this.searchSubmitEvent.emit(value);
  }
}
