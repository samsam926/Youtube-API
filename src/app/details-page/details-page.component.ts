import { YoutubeService } from "./../youtube.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details-page",
  templateUrl: "./details-page.component.html",
  styleUrls: ["./details-page.component.sass"]
})
export class DetailsPageComponent implements OnInit {
  videos: any[];
  loadVideo() {
    const videoID = this.route.snapshot.paramMap.get("id");
    this.YoutubeService.getVideosForChanel(videoID, 1);
  }
  constructor(
    private route: ActivatedRoute,
    private YoutubeService: YoutubeService
  ) {}

  ngOnInit() {
    this.loadVideo();
  }
}
