import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pasteleria11';

  items = [
    {
      title: 'Muffin de agraz',
      price: 5000,
      category: 'muffins'
    },
    {
      title: 'Muffin de chocolate',
      price: 5100,
      category: 'muffins'
    },
    {
      title: 'Muffin de vainilla',
      price: 5200,
      category: 'muffins'
    },
    {
      title: 'Cupcake con toppings',
      price: 5300,
      category: 'cupcakes'
    },
    {
      title: 'Cupcake de chocolate',
      price: 5400,
      category: 'cupcakes'
    }
  ];
}
