import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //import Hero interface
//import { HEROES } from '../mock-heroes'; //import the HEROES mock
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //assign- to expose the HEROES array for binding
  //heroes = HEROES;
  heroes: Hero[] = [];

  //inject the HeroService
  constructor(private heroService:HeroService, private messageService:MessageService) { }

  //initialization logic
  ngOnInit() {
    this.getHeroes();
  }

  //asynchronous approach will work when the HeroService requests heroes from a remote server
  getHeroes(): void {
    this.heroService.getHeroes()
      //subscribe() method passes the emitted array to the callback, which sets the component's heroes property
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  //NO LONGER NEEDED

  //don't assign! There is no selected hero when the application starts (?:) -undefined
  selectedHero?: Hero;

  //method assigns the clicked hero from the template to the component's selectedHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
