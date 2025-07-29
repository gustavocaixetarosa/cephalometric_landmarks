import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticPanelComponent } from './diagnostic-panel.component';

describe('DiagnosticPanelComponent', () => {
  let component: DiagnosticPanelComponent;
  let fixture: ComponentFixture<DiagnosticPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
