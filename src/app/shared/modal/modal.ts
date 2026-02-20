import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { Router } from "@angular/router";

@Component({
  selector: 'modal-content',
  standalone: false,
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class ModalComponent {
  private readonly activeModal = inject(NgbActiveModal);
  private readonly router = inject(Router);

  protected redirect(): void {
    this.activeModal.close();
    this.router.navigate(['/catalog']);
  }

}
