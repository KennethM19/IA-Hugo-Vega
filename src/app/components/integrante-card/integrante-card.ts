import {Component, Input} from '@angular/core';
import {ImgDirective} from '@coreui/angular';

@Component({
  selector: 'app-integrante-card',
  imports: [
    ImgDirective
  ],
  templateUrl: './integrante-card.html',
  styleUrl: './integrante-card.css',
  standalone: true
})
export class IntegranteCard {
  @Input() nombre!: string;
  @Input() codigo!: string;
  @Input() foto!: string;
}
