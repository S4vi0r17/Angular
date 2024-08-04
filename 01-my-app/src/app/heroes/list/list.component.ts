import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesName = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  public lastHeroDeleted: string | undefined;

  removeLastHero() {
    this.lastHeroDeleted = this.heroesName.pop();
  }
}
