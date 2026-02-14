import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { Router } from "@angular/router";

@Component({
  selector: 'modal-content',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class ModalComponent {
  private activeModal = inject(NgbActiveModal);
  private router = inject(Router);

  redirect() {
    this.activeModal.close();
    this.router.navigate(['/catalog']);
  }

}
