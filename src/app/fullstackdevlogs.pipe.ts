import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullstackdevlogs'
})
export class FullstackdevlogsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + "not a all";
  }

}