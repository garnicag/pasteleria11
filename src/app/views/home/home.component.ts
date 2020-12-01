import { Component, OnInit } from '@angular/core';
import { Items } from '../../data/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'pasteleria11';
  itemsFiltered: any;
  hasResults: boolean;

  ngOnInit(): void {
    this.itemsFiltered = Items;
    this.hasResults = Boolean(this.itemsFiltered.length);
  }

  filterResults(event: any): void{
    this.itemsFiltered = Items.filter(x => x.title.toLowerCase().includes(event.toLowerCase()));
    this.hasResults = Boolean(this.itemsFiltered.length);
  }
}
