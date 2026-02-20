import { Component, inject } from '@angular/core';
import { Router } from "@angular/router";
import { SearchService } from '../../core/service/search-service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  protected isMenuCollapsed: boolean = true;

  private readonly searchService = inject(SearchService);
  private readonly router = inject(Router);

  protected changeSearch(e: Event, value: string) {
    if (e.type === 'change') {
      this.searchService.setSearchSubj(value);
      this.router.navigate(['/catalog']);
    }
  }
}
