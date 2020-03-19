import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey: string = 'AIzaSyBE79YY3cxDmXe3Uj9pXsxSg-Is8CM_q_k';
  constructor(public http: HttpClient) {
    console.log();
   }
    getVideosForChanel(channel, maxResults): Observable<Object> {
      let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
      return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
    }  
}
