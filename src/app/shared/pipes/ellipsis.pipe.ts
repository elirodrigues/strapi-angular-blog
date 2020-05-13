import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  public transform(value: any, ...args: any[]): any {
	    if (args === undefined) {
	      return value;
	    }

	    if (value.length > args) {
	      return value.substring(0, args) + '...';
	    } else {
	      return value;
	    }
	    
  }

}
