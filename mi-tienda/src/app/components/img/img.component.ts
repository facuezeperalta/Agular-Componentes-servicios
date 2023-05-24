import { Component, Input, Output, EventEmitter } from '@angular/core'; /* colocamos Input para poder usar los inputs */

@Component({ /* decorador  le dicen al compilador como debe comportarse*/
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() img: string = '';  /* al poner @Input() puedo mandarle información desde el padre hacia el hijo. */
  @Output() loaded = new EventEmitter<String>();
  imageDefault = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"

  imgError(){
    this.img = this.imageDefault;
  }
  imageLoaded(){
  console.log('log hijo');
  this.loaded.emit('this.img');
  }

}
