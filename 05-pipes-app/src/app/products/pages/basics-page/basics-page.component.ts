import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'gustavo';
  public nameUpper: string = 'GUSTAVO';
  public nameFull: string = 'GuStAvO BeNiTeS';

  public customDate: Date = new Date();
}
