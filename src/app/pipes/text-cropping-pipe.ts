import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCropping',
})
export class TextCroppingPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 105){
      return value.slice(0, 105) + '...';
    }
    return value;
  }
}
