import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  public isUpperCase: boolean = false;

  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.Blue },
    { name: 'Batman', canFly: false, color: Color.Black },
    { name: 'Green Lantern', canFly: true, color: Color.Green },
    { name: 'Flash', canFly: false, color: Color.Red },
    { name: 'Thor', canFly: true, color: Color.Blue },
    { name: 'Iron Man', canFly: false, color: Color.Red },
  ];

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public setOrderBy(orderBy: keyof Hero | ''): void {
    this.orderBy = orderBy;
  }
}
