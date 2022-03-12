import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(entityList: any[], filter: string): any[] {
    let filteredList = entityList;
    if (filter) {
      filteredList = [];
      filter = filter.toLowerCase();
      entityList.forEach((c) => {
        Object.keys(c).forEach((key, i) => {
          if (key.toLowerCase().includes('name')) {
            if (c[key].toLowerCase().includes(filter)) {
              filteredList.push(c);
            }
          }
        });
      });
    }
    return filteredList;
  }
}
