import { Pipe, PipeTransform, Sanitizer, SecurityContext } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer:Sanitizer){}

  transform(value: string, filter?: any): any {
    value = this.sanitizer.sanitize(SecurityContext.HTML, value);

    if (filter) {
      value = value.replace(new RegExp(`(${filter})`, 'gi'), `<b>$1</b>`);
      console.log(value);
    }

    return value;
  }

}
