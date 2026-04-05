import {Component, OnInit} from '@angular/core';
import {
  ButtonCloseDirective, ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent, ModalTitleDirective
} from '@coreui/angular';
import {ModalService} from '../../../services/ModalService/modal-service';

@Component({
  selector: 'app-element-not-available',
  imports: [
    ButtonDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent
  ],
  standalone: true,
  templateUrl: './element-not-available.html',
  styleUrl: './element-not-available.css',
})
export class ElementNotAvailable implements OnInit {
  isVisible = false;
  modalTitle = '';
  modalMessage = '';

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.modalTrigger$.subscribe(({title, message}) => {
      this.modalTitle = title;
      this.modalMessage = message;
      this.isVisible = true;
    });
  }

  closeModal() {
    this.isVisible = false;
  }
}
