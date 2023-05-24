import { Component, Input } from '@angular/core'; /* colocamos Input para poder usar los inputs */

@Component({ /* decorador  le dicen al compilador como debe comportarse*/
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() img: string = 'Valor inicial';  /* al poner @Input() puedo mandarle información desde el padre hacia el hijo. */


}
