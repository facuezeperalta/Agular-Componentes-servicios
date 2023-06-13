import { Component } from '@angular/core';

import{Product} from './models/product.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mystore';
  imgParent = 'asdsad';

  products: Product[] =[
     {
      id : '1',
      name: 'producto 1',
      image: '../assets/xbox blue controler.jpg',
      price: 60
    },
    {
      id : '2',
      name: 'producto 2',
      image: '../assets/XboxControlerWhite.jpg',
      price: 60
    },
    {
      id : '3',
      name: 'producto 3',
      image: '../assets/xboxGreenControler.jpg',
      price: 60
    },
    {
      id : '4',
      name: 'producto 4',
      image: '../assets/SonyA7III.jpg',
      price: 1400
    }
  ]

  onLoaded(img: string){
    console.log('Log Padre',img);
  }
}
