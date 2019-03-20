import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurant';
import { Observable} from 'rxjs';
import {Address} from '../address';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: Restaurant[];
  constructor() {
    this.restaurants = [
        new Restaurant({
            name: 'Mottel\'s Kitchen',
            phone: '(514) 555-2019',
            website: 'http://www.teamviral.com',
            rating: 5,
            avgMealPrice: 20,
            location: new Address({
                streetName: 'Walala',
                streetNumber: 1223,
                city: 'Montreal',
                province: 'QC',
                country: 'Canada',
                apartment: '#304',
            })
        }),
        new Restaurant({
            name: 'Mottel\'s Kitchen',
            rating: 5,
            avgMealPrice: 20,
            location: new Address({
                streetName: 'Walala',
                city: 'Montreal',
                province: 'QC',
                country: 'Canada'
            })
        }),
        new Restaurant({
            name: 'Mottel\'s Kitchen',
            phone: '(514) 555-2019',
            website: 'http://www.teamviral.com',
            rating: 5,
            avgMealPrice: 20,
            location: new Address({
                streetName: 'Walala',
                streetNumber: 1223,
                city: 'Montreal',
                province: 'QC',
                country: 'Canada'
            })
        }),
        new Restaurant({
            name: 'Mottel\'s Kitchen',
            phone: '(514) 555-2019',
            website: 'http://www.teamviral.com',
            rating: 5,
            avgMealPrice: 20
        }),
        new Restaurant({
            name: 'Mottel\'s Kitchen',
            phone: '(514) 555-2019',
            website: 'http://www.teamviral.com',
            rating: 5,
            avgMealPrice: 20
        })
    ];

    console.log(this.restaurants);
  }
  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }
}
