import { Component } from '@angular/core';
import { Product } from '../../models/product.model' ;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product = {
    id: '1',
    name: 'Sony A7III',
/*     image:'/mi-tienda/src/assets/images/sonyA7III.jpg',
 */
  image: 'https://m.media-amazon.com/images/I/91rQ3XfEYzL._AC_SL1500_.jpg',
  price: 1800
  }
}
