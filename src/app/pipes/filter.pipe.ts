import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(entityList: any[], filter: string): any[] {
    if (filter) {
      filter = filter.toLocaleLowerCase();
      return entityList.filter((c) =>
        c.name.toLocaleLowerCase().includes(filter)
      );
    }
    return entityList;
  }
}
