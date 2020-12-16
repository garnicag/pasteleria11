import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() title: string;
  @Input() price: number;
  @Input() itemId: number;
  @Input() picture: string;
  @Output() addToCartEvent = new EventEmitter<any>();

  addToCart(price, itemId, title, picture): void {
    this.addToCartEvent.emit({price, itemId, title, picture});
  }
}
