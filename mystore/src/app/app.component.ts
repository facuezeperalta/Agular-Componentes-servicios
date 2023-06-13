import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mystore';
  imgParent = 'asdsad';

  onLoaded(img: string){
    console.log('Log Padre',img);
  }
}
