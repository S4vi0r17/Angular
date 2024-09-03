import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeGnModule } from '../prime-gn/prime-gn.module';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeGnModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
