import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadVComponent } from './upload-v/upload-v.component';
import { VideosVComponent } from './videos-v/videos-v.component';
import { SearchVComponent } from './search-v/search-v.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadVComponent,
    VideosVComponent,
    SearchVComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
