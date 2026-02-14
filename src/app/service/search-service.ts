import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  searchSubj: Subject<string> = new Subject<string>();

  setSearchSubj(value: string) {
    this.searchSubj.next(value);
  }
}
