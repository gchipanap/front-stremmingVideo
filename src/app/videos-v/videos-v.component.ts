import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../objects';

@Component({
  selector: 'app-videos-v',
  templateUrl: './videos-v.component.html',
  styleUrl: './videos-v.component.css'
})
export class VideosVComponent {
  videos: Video[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos(): void {
    this.http.get<Video[]>('http://34.41.141.60:8080/api/getAllVideos')
      .subscribe(videos => {
        this.videos = videos;
      }, error => {
        console.error('Error al recuperar videos:', error);
      });
  }
}
