import {Component, Input} from '@angular/core';
import {ModalService} from '../../services/ModalService/modal-service';


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

  constructor(private modalService: ModalService) {}

  openLink(link: string, title: string) {
    if (!link || link.trim() === '') {
      this.modalService.openModal(title, `${title} no disponible`);
    } else {
      window.open(link, '_blank');
    }
  }
}
