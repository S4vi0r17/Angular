import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <input
    type="text"
    class="form-control search-input"
    placeholder="Search GIFs"
    (keyup.enter)="searchTag()"
    #txtTagInput
  />
  `,
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public TagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService
  ) { }

  searchTag() {
    const tag = this.TagInput.nativeElement.value;
    this.gifsService.searchGifs(tag);
    this.TagInput.nativeElement.value = '';
  }
}
