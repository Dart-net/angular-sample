import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

const HEROES: Hero[] = [];

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit  {

  constructor(private heroService: HeroService, private router: Router) {}
  name = 'Angular';
  title = 'Tour of Heroes!';
  selectedHero: Hero;
  heroes = HEROES;
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
// <div *ngIf="selectedHero">
// <h2>{{selectedHero.name}} details!</h2>
// <div><label>id: </label>{{selectedHero.id}}</div>
// <div>
//   <label>name: </label>
//   <input [(ngModel)] = "selectedHero.name" placeholder="name">
// </div>
// </div>  