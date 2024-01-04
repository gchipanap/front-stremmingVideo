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
  paginatedVideos: Video[] = [];
  currentPage: number = 0;
  pageSize: number = 5; // Cantidad de videos por página
  totalVideos: number = 0;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchVideos();
  }

  fetchVideos(): void {
    this.http.get<Video[]>('http://34.41.141.60:8080/api/getAllVideos')
      .subscribe(videos => {
        this.videos = videos;
        this.totalVideos = videos.length;
        this.setPage(0);
      }, error => {
        console.error('Error al recuperar videos:', error);
      });
  }

  setPage(page: number): void {
    this.currentPage = page;
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedVideos = this.videos.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage(): void {
    if ((this.currentPage + 1) * this.pageSize < this.totalVideos) {
      this.setPage(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.setPage(this.currentPage - 1);
    }
  }
}


