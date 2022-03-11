import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/carDetails';

@Pipe({
  name: 'filterCar',
})
export class FilterCarPipe implements PipeTransform {
  transform(value: CarDto[], searchString: string): CarDto[] {
    searchString ? searchString.toLocaleLowerCase() : '';
    if (searchString) {
      return value.filter((c) =>
        c.carName.toLocaleLowerCase().includes(searchString)
      );
    }
    return value;
  }
}
