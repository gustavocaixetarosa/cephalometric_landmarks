import { Component, Input } from '@angular/core';

@Component({
  selector: 'diagnostic-panel',
  standalone: true,
  imports: [],
  templateUrl: './diagnostic-panel.component.html',
  styleUrl: './diagnostic-panel.component.scss'
})
export class DiagnosticPanelComponent {
  @Input() isLoading: boolean = false;
  @Input() results: any;
  @Input() diagnosis: any;
}
