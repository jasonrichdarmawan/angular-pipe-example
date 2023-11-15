import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(a: number, b: number): number {
    console.log(`multiply ${a} * ${b}`)
    return a * b
  }

}