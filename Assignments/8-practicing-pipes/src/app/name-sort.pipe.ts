import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSort'
})
export class NameSortPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
  }

}
