import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterlist'
})
export class FilterlistPipe implements PipeTransform {

  transform(videos: any, userenter: any): any {
    if (userenter === undefined) return videos;

    return videos.filter(function(videos) {
        return videos.snippet.title.toLowerCase().includes(userenter.toLowerCase());
    })
}

  }