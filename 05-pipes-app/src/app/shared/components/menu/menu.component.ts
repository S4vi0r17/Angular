import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
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
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: '/numbers',
          },
          {
            label: 'No common pipes',
            icon: 'pi pi-times',
            routerLink: '/uncommon',
          },
        ],
      },
      {
        label: 'Personalized Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Order',
            icon: 'pi pi-sort',
            routerLink: '/custom',
          },
        ],
      },
    ];
  }
}
