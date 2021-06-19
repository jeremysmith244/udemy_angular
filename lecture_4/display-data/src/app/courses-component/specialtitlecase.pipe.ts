import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'specialtitlecase'
})
export class SpecialTitlePipe implements PipeTransform {
    ignore = ['of', 'the', 'a', 'an', 'and', 'with'];

    constructor (private titlePipe: TitleCasePipe) {
    }

    transform(value: string) {
        let answer = "";
        if (!value)
            return null;
        let words = value.split(" ");

        answer += this.titlePipe.transform(words[0]);
        for (var i=1; i<words.length; i++) {
            let word = words[i];
            if (this.ignore.includes(word.toLowerCase()))
                answer += " " + word.toLowerCase();
            else
                answer += " " + this.titlePipe.transform(word);
        }
        return answer;
    }
}