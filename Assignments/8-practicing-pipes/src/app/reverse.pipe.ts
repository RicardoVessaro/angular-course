import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    let reversedValue = value.split('').reverse();
    
    let newString = '';
    
    reversedValue.forEach(v => {
      newString += v
    });

    return newString;
  }

}
