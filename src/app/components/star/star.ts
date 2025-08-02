import { Component, Input } from '@angular/core';

@Component({
  selector: 'star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.css'
})
export class Star {

  @Input() iconColor!:string;
  @Input() lineColor!:string;
}
