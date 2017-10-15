import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {

    if (!value) { return null; }

    let words = value.split(' ');

    for (let i = 0; i < words.length; i++) {

      let word = words[i];

      if (i > 0 && this.isPreposition(word)) {
        words[i] = word.toLocaleLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }
    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = ['of'
      , 'the'
      , 'de'
      , 'do'
      , 'da'
      , 'o'
      , 'a'
      , 'se'
      , 'é'
      , 'e'
      , 'lhe'];

    return prepositions.includes(word.toLocaleLowerCase());

  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toLocaleUpperCase() + word.substr(1).toLocaleLowerCase();
  }
}
