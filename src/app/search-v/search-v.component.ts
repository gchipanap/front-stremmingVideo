import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../objects';

@Component({
  selector: 'app-search-v',
  templateUrl: './search-v.component.html',
  styleUrl: './search-v.component.css'
})
export class SearchVComponent {
  searchText: string = '';
  videos: Video[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchVideos(): void {
    this.http.get<Video[]>(`http://34.41.141.60:8080/api/search/${this.searchText}`)
      .subscribe(videos => {
        this.videos = videos;
      }, error => {
        console.error('Error al recuperar videos:', error);
         alert('Error al recuperar videos. Por favor, inténtalo de nuevo.');

      });
  }
}
