import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

@Pipe({
  name: 'withLoading'
})
export class WithLoadingPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(isObservable(value)){
        return value.pipe(
          map((value: any) => ({ loading: false, value })),
          startWith({ loading: true }),
          catchError(error => of({ loading: false, error }))
        )
    }else{
      return value
    }
  }

}
