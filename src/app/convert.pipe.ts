import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, args: string): any {

    if( !value ) {
      return '';
    }
    switch (args) {
      case 'km': 
       return `${value * 1.60934} kilometers` ;
      case 'm':
        return `${ value * 1609.34 } meter`
      case 'cm':
        return `${value * 160934} centimeter`
      default :
       throw new Error('unit are not supported');
    }
  }

}
