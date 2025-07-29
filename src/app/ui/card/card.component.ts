import { StartingStyleRule } from './../../../../node_modules/lightningcss/node/ast.d';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  standalone: true,
  template: `
    <div
      data-slot="card"
      [class]="baseClasses + (className ? ' ' + className : '')"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  @Input() className = '';
  baseClasses =
    'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border';
}
