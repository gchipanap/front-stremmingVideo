import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../objects';

@Component({
  selector: 'app-upload-v',
  templateUrl: './upload-v.component.html',
  styleUrl: './upload-v.component.css'
})
export class UploadVComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadVideo() {
    if (!this.selectedFile) {
      console.error('Seleccione un archivo antes de subirlo.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>('http://34.41.141.60:8080/api/upload', formData)
      .subscribe(
        response => console.log(response),
        error => console.error('Error:', error)
      );
  }
}
