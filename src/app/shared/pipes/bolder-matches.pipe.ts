import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldermatches'
})
export class BolderMatchesPipe implements PipeTransform {

  /**
   * @author      Miguel Castro <miguelcastrotic@gmail.com>
   * @date        2020-10-20
   * @description Value is replaced by itself along with the bold tag
   * @param       value string to replace
   * @param       match match to search in value
   * @returns     string replaced in case of matches
   */
  transform(value: string, match: string): unknown {
    const trimMatch = match.trim();
    const regex = new RegExp(`(${trimMatch})`, 'ig');
    return value.replace(regex, '<b>$1</b>');
  }

}
