import { Component, Input, Output, EventEmitter } from '@angular/core'; /* colocamos Input para poder usar los inputs */

@Component({ /* decorador  le dicen al compilador como debe comportarse*/
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() img: string = '';  /* al poner @Input() puedo mandarle información desde el padre hacia el hijo. */
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "../../../assets/images/voidImage.png"


  imgError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
  console.log('Log hijo');
  this.loaded.emit(this.img);
  }

}
