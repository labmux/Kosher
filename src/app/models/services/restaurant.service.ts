import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurant';
import {Observable, of} from 'rxjs';
import {Address} from '../address';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurant: Restaurant[]
  constructor() {
    this.restaurants = [
      new Restaurant({
        name: 'Mottel\'s Kitchen',
        phone: '(514) 555-2019',
        website: 'https://www.teamviral.com',
        rating: 5,
        avgMealPrice: 20,
      }),
      new Restaurant({
        name: 'Tav Cafe',
        phone: '(514) 112-3581',
        website: 'http://cafetav.com/',
        rating: 3,
        avgMealPrice: 15
      }),
      new Restaurant({
        name: 'Pizza Pita',
        phone: '(514) 234-1111',
        rating: 4,
        avgMealPrice: 18
      }),
      new Restaurant({
        name: 'Chops',
        website: 'https://www.teamviral.com',
        rating: 5,
        avgMealPrice: 40,
        location: new Address({
          streetNumber: 1313,
          streetName: 'Mockingbird Lane',
          city: 'Montreal',
          province: 'QC',
          country: 'Canada'
        })
      }),
      new Restaurant({
        name: 'Yakimono',
        phone: '(718) 781-0990',
        website: 'https://www.google.com',
        rating: 5,
        avgMealPrice: 50,
        location: new Address({
          streetNumber: 221,
          apartment: 'b',
          streetName: 'Baker St.',
          city: 'London',
          province: 'ON',
          postalCode: '1A2 B3C',
          country: 'Canada'
        })
      })
    ];
  }

  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }
}
