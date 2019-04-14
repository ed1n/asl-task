import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-single-album',
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css']
})
export class SingleAlbumComponent implements OnInit {
  albumId: Number;
  album: Album;
  errorMsg: String;
  loading: Boolean = true;
  constructor(private albumService: AlbumService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.albumId = params.id;
    });
  }

  ngOnInit() {
    this.albumService
      .getAlbumById(this.albumId)
      .subscribe((album: Album) => {
        this.album = album;
        this.loading = false;
      },
        error => {
          this.errorMsg = error;
          this.loading = false;
        });
  }

}
