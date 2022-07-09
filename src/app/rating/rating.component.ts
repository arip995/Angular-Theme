import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Output() stars = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  
  ratingValue(star: number): any {
    this.stars.emit(star)
  }

}
