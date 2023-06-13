import { Component,OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = "../../../assets/DefaultImage.jpg"

  imgError(){
    this.img = this.imgDefault;
  }
  ImgLoaded(){
    console.log('Loaded Hijo');
    this.loaded.emit(this.img);
  }

}
