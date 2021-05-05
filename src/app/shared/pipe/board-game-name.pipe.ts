import { Pipe, PipeTransform } from '@angular/core';
import {Thing} from '../models/game';

@Pipe({
  name: 'boardGameName'
})
export class BoardGameNamePipe implements PipeTransform {

  transform(value: Thing): string {
    return `${value.elements[0].attributes.value} (${value.elements[1]?.attributes?.value})`;
  }
}
