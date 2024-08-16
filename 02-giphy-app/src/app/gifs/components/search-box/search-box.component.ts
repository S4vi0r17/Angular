import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search:</h5>
    <input
      type="text"
      class="form-control"
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

  searchTag() {
    const tag = this.TagInput.nativeElement.value;
    console.log(tag);
  }
}
