import { Component, inject, Output } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap/collapse';
import { Subject } from 'rxjs';
import { SearchService } from '../../service/search-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgbCollapse],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;
  private searchService = inject(SearchService);
  private router = inject(Router);

  changeSearch(e: Event, value: string) {
    if (e.type === 'change') {
      this.searchService.setSearchSubj(value);
      this.router.navigate(['/catalog']);
    }
  }
}
