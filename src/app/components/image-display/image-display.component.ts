import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-display',
  standalone: true,
  imports: [],
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.scss'
})
export class ImageDisplayComponent {
  @Input() originalImage: any;
  @Input() analyzedImage: any;
}
