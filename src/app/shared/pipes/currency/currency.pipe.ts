import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(type: string, from: string, value: number): string {
    console.log(`CurrencyPipe type: ${type}, from: ${from}, value: ${value}`)
    return `$${value}`;
  }

}
