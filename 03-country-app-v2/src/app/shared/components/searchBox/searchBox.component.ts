import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
  styleUrl: './searchBox.component.css',
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>();

  private debounceSubscription?: Subscription;

  @Input() placeholder: string = '';

  @Input() value: string = '';

  @Output() search = new EventEmitter<string>();

  @Output() onDebounce = new EventEmitter<string>();

  emitValue(value: string): void {
    this.search.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }

  ngOnInit(): void {
    this.debounceSubscription = this.debouncer
      .pipe(debounceTime(500))
      .subscribe((value => this.onDebounce.emit(value)));
  }

  ngOnDestroy(): void {
    this.debounceSubscription?.unsubscribe();
  }
}
