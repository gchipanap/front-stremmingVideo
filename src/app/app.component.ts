import { Component } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Video } from './models/video-model';
=======
>>>>>>> 738dc525b4422a4ae17924e3caf4214a81ddbbba

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ap1';
<<<<<<< HEAD

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
=======
>>>>>>> 738dc525b4422a4ae17924e3caf4214a81ddbbba
}
