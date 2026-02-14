import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import jQuery from 'jquery';
import 'magnific-popup';
import { HttpService } from '../../../service/http-service';
import { AssortmentType } from '../../../types/assortment-item.type';
import { TextCroppingPipe } from '../../../pipes/text-cropping-pipe';
import { DataService } from '../../../service/data-service';
import { Router } from '@angular/router';
import { SearchService } from '../../../service/search-service';
import { Subscription } from 'rxjs';

declare global {
  interface JQuery {
    magnificPopup(options?: any): JQuery;
  }
}

@Component({
  selector: 'app-assortment',
  imports: [TextCroppingPipe],
  templateUrl: './assortment.html',
  styleUrl: './assortment.scss',
})
export class AssortmentComponent implements OnInit, OnDestroy {
  private httpService = inject(HttpService);
  private cdr = inject(ChangeDetectorRef);
  private dataService = inject(DataService);
  private router = inject(Router);
  private searchService = inject(SearchService);
  searchItems: string = '';
  assortmentItems: AssortmentType[] | null = null;
  dataLoaded: boolean = false;

  private subscriberHttpService: Subscription = new Subscription();
  private subscriberSearchService: Subscription = new Subscription();

  ngOnInit(): void {
    this.getAssortment();
    this.subscriberSearchService = this.searchService.searchSubj.subscribe((data: string) => {
      this.searchItems = data;
      this.getAssortment(data);
    });
  };

  getAssortment(search?: string) {
    this.subscriberHttpService = this.httpService.getCatalog(search).subscribe({
      next: (data) => {
        this.assortmentItems = data;
        this.dataLoaded = true;
        this.cdr.detectChanges();
        jQuery('.image-zoom').magnificPopup({
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
    });
  }

  select(item: AssortmentType) {
    this.dataService.setSelectedItem(item);
    this.router.navigate(['/product']);
  };

  ngOnDestroy(): void {
    this.subscriberSearchService?.unsubscribe();
    this.subscriberHttpService?.unsubscribe();
  }
}
