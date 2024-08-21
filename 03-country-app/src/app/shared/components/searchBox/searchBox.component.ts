import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styleUrl: './searchBox.component.css',
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';

  @Output() search = new EventEmitter<string>();

  emitValue(value: string): void {
    this.search.emit(value);
  }
}
