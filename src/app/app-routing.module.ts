import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadVComponent } from './upload-v/upload-v.component';
import { VideosVComponent } from './videos-v/videos-v.component';
import { SearchVComponent } from './search-v/search-v.component';

const routes: Routes  = [
  { path: 'upload', component: UploadVComponent },
  { path: 'videos', component: VideosVComponent },
  { path: 'search', component: SearchVComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
