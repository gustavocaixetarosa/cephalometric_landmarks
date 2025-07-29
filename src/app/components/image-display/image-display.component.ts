import { Component, Input } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'image-display',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './image-display.component.html',
  styleUrl: './image-display.component.scss'
})
export class ImageDisplayComponent {
  @Input() originalImage: string | null = null;
  @Input() analyzedImage: string | null = null;
}
