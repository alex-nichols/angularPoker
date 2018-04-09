import { Pipe, PipeTransform } from '@angular/core';
import { HandTypes, HandTypeStrings } from '../models/hand.types';

@Pipe({
  name: 'handTypeName'
})
export class HandTypeNamePipe implements PipeTransform {

  transform(value: HandTypes, args?: any): string {
    return HandTypeStrings[value]
  }

}
