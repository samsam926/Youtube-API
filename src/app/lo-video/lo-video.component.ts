import { YoutubeService } from './../youtube.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-lo-video',
  templateUrl: './lo-video.component.html',
  styleUrls: ['./lo-video.component.sass']
})
export class LoVideoComponent implements OnInit {
  @Input() filteredVideos: any;

  videos: any[];
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ];

  // videoPublished = new Date (this.videos.lista);
  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.spinner.show()
    setTimeout(() => {this.spinner.hide()} , 3000);
    this.videos = [];    
    this.youTubeService
    .getVideosForChanel('UCJ2dqf83cXuxcJXy6l_e7Bw', 15)
    // .pipe( takeUntil (this.unsubscribe$))
    .subscribe(lista => {
    for (let element of lista["items"]) {
    this.videos.push(element)
    }
    });

  }

}

