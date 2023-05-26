import { Component } from '@angular/core';
import {Product} from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageParent = '../assets/images/defaulimage.png';
  onLoaded(img: string){
    console.log('Log padre',img);
  }

  products : Product[] = [
    {
      id:'1',
      name:'Sony A7III',
      image:'../assets/images/sonyA7III.jpg',
      price:1800
    },
    {
      id:'2',
      name: 'Sony 135 mm 1.8 GM',
      image: '../assets/images/135mm1.8GM.jpg',
      price: 2000
    },
    {
      id:'3',
      name:'Godox AD200',
      image:'../assets/images/GodoxAD200.jpg',
      price:300
    },
    {
      id:'4',
      name:'Sony A7IV',
      image:'../assets/images/SonyA7IV.jpg',
      price: 2500
    }
  ];
}
