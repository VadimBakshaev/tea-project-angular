import { Component, ElementRef, inject, OnDestroy, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, timer } from 'rxjs';
import { HttpService } from '../../core/service/http-service';
import { DataService } from '../../core/service/data-service';

@Component({
  selector: 'app-order',
  standalone: false,  
  templateUrl: './order.html',
  styleUrl: './order.scss',
})
export class OrderComponent implements OnDestroy {
  private readonly httpService = inject(HttpService);
  private readonly dataService = inject(DataService);
  private readonly fb = inject(FormBuilder);

  private subscriber: Subscription = new Subscription();

  protected showForm = signal<boolean>(true);
  protected showErrorSending = signal<boolean>(false);

  @ViewChild('submitBtn') private submitBtn!: ElementRef;

  protected readonly orderForm: FormGroup = this.fb.group({
    product: [this.dataService.getSelectedItem()?.title, [Validators.required]],
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[a-zA-Zа-яА-ЯёЁ]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{11}$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    address: ['', [Validators.required, Validators.pattern('^[а-яА-Яa-zA-Z0-9 \/\\\\-]+$')]],
    comment: ['']
  });

  protected get product() { return this.orderForm.get('product') };
  protected get name() { return this.orderForm.get('name') };
  protected get last_name() { return this.orderForm.get('last_name') };
  protected get phone() { return this.orderForm.get('phone') };
  protected get country() { return this.orderForm.get('country') };
  protected get zip() { return this.orderForm.get('zip') };
  protected get address() { return this.orderForm.get('address') };

  protected sendOrder(): void {
    if (this.orderForm.valid) {
      this.submitBtn.nativeElement.disabled = true;
      this.subscriber.add(this.httpService.postOrder(this.orderForm.value).subscribe(
        response => {
          this.submitBtn.nativeElement.disabled = false;
          this.checkResponse(response);
        }
      ))
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  private checkResponse(response: { success: number }): void {
    if (response.success === 1) {
      this.orderForm.reset();
      this.showForm.set(false);
    } else {
      this.showErrorSending.set(true);
      this.subscriber.add(timer(3000).subscribe(() => {
        this.showErrorSending.set(false);
      }));
    }
  }

  public ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
