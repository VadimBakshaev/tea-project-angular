import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  public searchSubj: Subject<string> = new Subject<string>();

  public setSearchSubj(value: string): void {
    this.searchSubj.next(value);
  }
}
