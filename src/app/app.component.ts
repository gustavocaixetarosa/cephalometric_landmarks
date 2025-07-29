import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ImageAnalysisComponent } from './components/image-analysis/image-analysis.component';
import { DiagnosticPanelComponent } from './components/diagnostic-panel/diagnostic-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,
      ImageUploadComponent,
      ImageAnalysisComponent,
      DiagnosticPanelComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cephalometric_landmarks';
}
