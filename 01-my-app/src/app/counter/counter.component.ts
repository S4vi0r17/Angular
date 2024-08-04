import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public title = 'Counter App';
  public counter = 0;

  public decrement(): void {
    this.counter--;
  }

  public reset(): void {
    this.counter = 0;
  }

  public increment(): void {
    this.counter++;
  }
}
