import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  isLoggedIn = false;
  loginModal = false;
  showUserMenu = false;
  cartList: Array<any> = [];
  totalPrice = 0;

  ngOnInit(): void {
    this.itemsFiltered = Items;
    this.hasResults = Boolean(this.itemsFiltered.length);
    this.checkSession();
  }

  filterResults(event: any): void {
    this.itemsFiltered = Items.filter(x => x.title.toLowerCase().includes(event.toLowerCase()));
    this.hasResults = Boolean(this.itemsFiltered.length);
  }

  toggleModal(): void {
    this.loginModal = !this.loginModal;
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  sessionStart(): void {
    localStorage.setItem('activeSession', 'true');
    this.checkSession();
    this.toggleModal();
  }

  sessionStop(): void {
    localStorage.setItem('activeSession', '');
    this.checkSession();
    this.toggleUserMenu();
  }

  checkSession(): void {
    this.isLoggedIn = Boolean(localStorage.getItem('activeSession'));
  }

  addToCart(event: any): void {
    const UID = Math.random().toString(36).substr(2, 9);
    this.cartList.push({price: event.price, itemId: event.itemId, title: event.title, picture: event.picture, uid: UID});
    this.totalPrice += parseInt(event.price, 10);
  }

  removeItem(uid, price): void {
    this.cartList = this.cartList.filter(( obj ) => {
      return obj.uid !== uid;
    });
    this.totalPrice -= parseInt(price, 10);
  }

  checkout(): void {
    alert('Gracias por tu compra. Tu pedido llegará pronto');
  }
}
