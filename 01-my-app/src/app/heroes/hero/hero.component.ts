import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  hero = {
    name: 'Superman',
    age: 30
  };

  get capitalizeName(): string {
    return this.hero.name.toUpperCase();
  }

  getHeroDetails(): string {
    return `Hero: ${this.hero.name}, Age: ${this.hero.age}`;
  }

  changeHeroName() {
    this.hero.name = 'Batman';
  }

  changeHeroAge() {
    this.hero.age = 35;
  }

  resetHero() {
    this.hero.name = 'Superman';
    this.hero.age = 30;
  }
}
