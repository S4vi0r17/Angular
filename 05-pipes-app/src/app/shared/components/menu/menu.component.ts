import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes of Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Dates',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
          },
          {
            label: 'No common pipes',
            icon: 'pi pi-times',
          }
        ]
      },
      {
        label: 'Personalized Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Upper and Lower Case',
            icon: 'pi pi-sort-alpha-up',
          },
          {
            label: 'Currency',
            icon: 'pi pi-money-bill',
          }
        ]
      }
    ];
  }
}
