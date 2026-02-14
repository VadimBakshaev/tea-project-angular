import { ChangeDetectorRef, Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../service/data-service';
import { HttpService } from '../../../service/http-service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class OrderComponent implements OnDestroy {
  private httpService = inject(HttpService);
  private dataService = inject(DataService);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private subscrOrder: Subscription | null = null;
  private subscrTimer: Subscription | null = null;

  showForm: boolean = true;
  showErrorSending: boolean = false;

  @ViewChild('submitBtn') submitBtn!: ElementRef;

  orderForm: FormGroup = this.fb.group({
    product: [this.dataService.selectedItem()?.title, [Validators.required]],
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{11}$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    address: ['', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z0-9 \/\\\\-]+$')]],
    comment: ['']
  });

  get product() { return this.orderForm.get('product') };
  get name() { return this.orderForm.get('name') };
  get last_name() { return this.orderForm.get('last_name') };
  get phone() { return this.orderForm.get('phone') };
  get country() { return this.orderForm.get('country') };
  get zip() { return this.orderForm.get('zip') };
  get address() { return this.orderForm.get('address') };

  sendOrder() {
    if (this.orderForm.valid) {
      this.submitBtn.nativeElement.disabled = true;
      this.subscrOrder = this.httpService.postOrder(this.orderForm.value).subscribe(
        response => {
          this.submitBtn.nativeElement.disabled = false;
          if (response.success === 1) {
            this.orderForm.reset();
            this.showForm = false;
          } else {
            this.showErrorSending = true;
            this.cdr.detectChanges();
            this.subscrTimer = timer(3000).subscribe(() => {
              this.showErrorSending = false;
              this.cdr.detectChanges();
            });            
          }
        }
      )
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.subscrTimer?.unsubscribe();
    this.subscrOrder?.unsubscribe();
  }
}
