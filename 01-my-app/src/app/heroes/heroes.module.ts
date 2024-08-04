import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule // To use ngFor and ngIf
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})
export class HeroesModule { }