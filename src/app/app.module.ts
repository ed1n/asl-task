import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PostListComponent } from './pages/posts/post-list/post-list.component';
import { SinglePostComponent } from './pages/posts/single-post/single-post.component';
import { HomeComponent } from './pages/home/home.component';
import { AlbumListComponent } from './pages/albums/album-list/album-list.component';
import { SingleAlbumComponent } from './pages/albums/single-album/single-album.component';
import { SinglePostCardComponent } from './components/posts/single-post-card/single-post-card.component';
import { SingleCommentCardComponent } from './components/posts/single-comment-card/single-comment-card.component';
import { SingleFullPostCardComponent } from './components/posts/single-full-post-card/single-full-post-card.component';
import { PostService } from './services/post.service';
import { SinglePostCommentsComponent } from './components/posts/single-post-comments/single-post-comments.component';
import { SingleAlbumCardComponent } from './components/albums/single-album-card/single-album-card.component';
import { SingleFullAlbumCardComponent } from './components/albums/single-full-album-card/single-full-album-card.component';
import { SingleAlbumPhotosComponent } from './components/albums/single-album-photos/single-album-photos.component';
import { SinglePhotoCardComponent } from './components/albums/single-photo-card/single-photo-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: SinglePostComponent },
  { path: 'albums', component: AlbumListComponent },
  { path: 'albums/:id', component: SingleAlbumComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostListComponent,
    SinglePostComponent,
    HomeComponent,
    AlbumListComponent,
    SingleAlbumComponent,
    SinglePostCardComponent,
    SingleCommentCardComponent,
    SingleFullPostCardComponent,
    SinglePostCommentsComponent,
    SingleAlbumCardComponent,
    SingleFullAlbumCardComponent,
    SingleAlbumPhotosComponent,
    SinglePhotoCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
