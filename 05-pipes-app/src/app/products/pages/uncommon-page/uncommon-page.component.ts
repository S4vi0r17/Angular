import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Gustavo';
  public gender: 'male' | 'female' = 'male';
  public genderMap = {
    male: 'invite him',
    female: 'invite her',
  };

  changeName(): void {
    this.name = 'Viviana';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Gustavo', 'Viviana', 'Luis', 'Marta'];
  public clientsMap = {
    '=0': 'There are no clients waiting.',
    '=1': 'There is one client waiting.',
    other: 'There are # clients waiting.',
  };

  removeClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Gustavo',
    age: 23,
    address: '123 Street',
  };

  // Async Pipe
  public myObservableTimer = interval(1000);
  public promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3000);
  });
}
