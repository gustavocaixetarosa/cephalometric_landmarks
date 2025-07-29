import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';

interface DiagnosticResult {
  measurement: string;
  value: string;
  normalRange: string;
  status: 'normal' | 'abnormal' | 'borderline';
}

@Component({
  selector: 'diagnostic-panel',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './diagnostic-panel.component.html',
  styleUrls: ['./diagnostic-panel.component.scss'],
})
export class DiagnosticPanelComponent {
  @Input() isLoading = false;
  @Input() results: DiagnosticResult[] | null = null;
  @Input() diagnosis: string | null = null;

  mockResults: DiagnosticResult[] = [
    { measurement: "SNA Angle", value: "82°", normalRange: "80-84°", status: "normal" },
    { measurement: "SNB Angle", value: "78°", normalRange: "78-82°", status: "normal" },
    { measurement: "ANB Angle", value: "4°", normalRange: "0-4°", status: "normal" },
    { measurement: "Wits Appraisal", value: "1mm", normalRange: "-1 to +3mm", status: "normal" },
    { measurement: "FMA", value: "28°", normalRange: "20-30°", status: "normal" },
    { measurement: "IMPA", value: "95°", normalRange: "87-95°", status: "normal" },
    { measurement: "U1-SN", value: "102°", normalRange: "100-110°", status: "normal" },
    { measurement: "L1-MP", value: "92°", normalRange: "85-95°", status: "normal" }
  ];

  getStatusColor(status: string): string {
    switch (status) {
      case 'normal': return 'bg-green-100 text-green-800 border-green-200';
      case 'abnormal': return 'bg-red-100 text-red-800 border-red-200';
      case 'borderline': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

  get displayResults(): DiagnosticResult[] {
    return this.results || this.mockResults;
  }

  get displayDiagnosis(): string {
    return this.diagnosis || "Based on the cephalometric analysis, the patient presents with a Class I skeletal relationship with normal facial proportions. All angular measurements fall within normal limits, indicating balanced craniofacial growth and development.";
  }
}
