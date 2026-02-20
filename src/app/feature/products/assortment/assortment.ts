import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import 'magnific-popup';
import { HttpService } from '../../../core/service/http-service';
import { AssortmentType } from '../../../core/types/assortment-item.type';
import { DataService } from '../../../core/service/data-service';
import { Router } from '@angular/router';
import { SearchService } from '../../../core/service/search-service';
import { Subscription } from 'rxjs';

declare global {
  interface JQuery {
    magnificPopup(options?: any): JQuery;
  }
}

@Component({
  selector: 'app-assortment',
  standalone: false,
  templateUrl: './assortment.html',
  styleUrl: './assortment.scss',
})
export class AssortmentComponent implements OnInit, OnDestroy {
  private readonly httpService = inject(HttpService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly dataService = inject(DataService);
  private readonly router = inject(Router);
  private readonly searchService = inject(SearchService);

  protected searchItems = signal<string>('');
  protected dataLoaded = signal<boolean>(false);
  protected assortmentItems: AssortmentType[] | null = null;

  private subscriberService: Subscription = new Subscription();

  public ngOnInit(): void {
    this.getAssortment();
    this.subscriberService = this.searchService.searchSubj.subscribe((data: string) => {
      this.searchItems.set(data);
      this.getAssortment(data);
    });
  };

  private getAssortment(search?: string): void {
    this.subscriberService.add(this.httpService.getCatalog(search).subscribe({
      next: (data) => {
        this.assortmentItems = data;
        this.dataLoaded.set(true);
        this.cdr.detectChanges();
        $('.image-zoom').magnificPopup({
          type: 'image',
          mainClass: 'mfp-with-zoom',
          zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function (openerElement: any) {
              return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    }));
  }

  protected select(item: AssortmentType): void {
    this.dataService.setSelectedItem(item);
    this.router.navigate(['/product']);
  };

  public ngOnDestroy(): void {
    this.subscriberService.unsubscribe();
  }
}
