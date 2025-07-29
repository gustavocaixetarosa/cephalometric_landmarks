import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'image-upload',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {
  @Input() uploadedImage: string | null = null;
  @Output() imageUpload = new EventEmitter<any>();
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  handleFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file && file.type.startsWith('image/')) {
      this.imageUpload.emit(file);
    }
  }

  handleButtonClick() {
    this.fileInputRef.nativeElement.click();
  }
}
