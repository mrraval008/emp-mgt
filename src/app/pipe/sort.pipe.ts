import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let sortObj = args[0];
    let {sortBy,sortOrder} = sortObj;
    if (sortBy && sortOrder) {
      let data =  value.slice(0);
      return data.sort((elem1, elem2) => {
        var x = elem1[sortBy].toLowerCase();
        var y = elem2[sortBy].toLowerCase();
        if (sortOrder == 'asc') {
          return x < y ? -1 : x > y ? 1 : 0;
        } else {
          return x < y ? 1 : x > y ? -1 : 0;
        }
      })
    }
    return value;

  }

}
