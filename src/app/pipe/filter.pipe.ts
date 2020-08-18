import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let searchValue = args[0];
    let searchField = args[1]

    if(!searchValue){
        return value
    }
    if(searchValue && value.length > 0){
        return value.filter(elm=>{
            return elm[searchField].includes(searchValue)
        })
    }
    return null;
  }

}
