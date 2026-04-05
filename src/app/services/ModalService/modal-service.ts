import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalTrigger = new Subject<{title: string, message: string}>();
  modalTrigger$ = this.modalTrigger.asObservable();

  openModal(title: string, message: string) {
    this.modalTrigger.next({title, message});
    console.log("no available")
  }
}
