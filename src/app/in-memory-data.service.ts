import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Berni' },
      { id: 12, name: 'Mr Mark' },
      { id: 13, name: 'Cyclone' },
      { id: 14, name: 'Fax' },
      { id: 15, name: 'Dr Manhattan' },
      { id: 16, name: 'Naruto' },
      { id: 17, name: 'Sasuke' },
      { id: 18, name: 'Luffy' },
      { id: 19, name: 'Sophie' },
      { id: 20, name: 'Bijoux' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
