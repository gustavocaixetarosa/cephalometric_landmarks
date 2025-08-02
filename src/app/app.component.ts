import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { DiagnosticPanelComponent } from './components/diagnostic-panel/diagnostic-panel.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './ui/card/card.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      ImageUploadComponent,
      ImageDisplayComponent,
      DiagnosticPanelComponent,
      CommonModule,
      CardComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'cephalometric_landmarks';
  isAnalyzing: boolean = false;
  isUploadingImage: boolean = false;
  originalImage: any;
  showResults: any;
  analyzedImage: any;

  handleGenerateAnalysis() {
    throw new Error('Method not implemented.');
  }

  handleImageUpload($event: Event) {
    if(event != null){
      this.isUploadingImage = true;
    }
  }
}
