import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {
  @Input() src!: string;
  @Input() alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.src) {
      throw new Error('Attribute "src" is required');
    }
  }

  handleLoad(): void {
    console.log('image loaded');
    this.hasLoaded = true;
  }
}
