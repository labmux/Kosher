import {Component, Input, OnInit} from '@angular/core';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.scss']
})
export class RestCardComponent implements OnInit {
  @Input() resto: Restaurant;

  constructor() {
      this.resto = new Restaurant();
    }
    ngOnInit() {
      // this.resto.name = 'Tav Cafe';
      // this.resto.website = 'http://www.cafetav.com';
      // this.resto.phone = '514-333-1212';
    }

}
