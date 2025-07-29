import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-upload',
  standalone: true,
  imports: [],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {

  @Input() uploadedImage: String = "";
}
