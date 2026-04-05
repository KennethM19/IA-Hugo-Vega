import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-panel',
  imports: [],
  templateUrl: './tab-panel.html',
  styleUrl: './tab-panel.css',
  standalone: true
})
export class TabPanel {
  @Input() title!: string;
  @Input() points: string[] = [];
  @Input() summary!: string;

  @Input() resourceLink: string = '';
  @Input() labLink: string = '';
  @Input() workLink: string = '';

}
