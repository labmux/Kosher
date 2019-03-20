import { Component } from '@angular/core';
import {Restaurant} from './models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rests: Restaurant[];

  constructor() {
    this.rests = [];
    let temp = new Restaurant();
    temp.name = 'Tav Cafe';
    temp.website = 'http://www.cafetav.com';
    temp.phone = '514-333-1212';
    temp.rating = 5;
    this.rests.push(temp);

    temp = new Restaurant();
    temp.name = 'Balbale';
    temp.website = 'http://www.google.com';
    temp.phone = '514-322-1122';
    temp.rating = 3;
    this.rests.push(temp);
   }

}
