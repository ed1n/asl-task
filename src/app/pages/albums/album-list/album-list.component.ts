import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];
  chunkedAlbums: Array<Album[]>;
  errorMsg: String;
  loading: Boolean = true;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService
      .getAllAlbums()
      .subscribe((albums: Album[]) => {
        this.albums = albums;
        this.chunkedAlbums = this.chunkAlbumsArray(this.albums);
        this.loading = false;
      },
        error => {
          this.errorMsg = error;
          this.loading = false;
        });
  }

  chunkAlbumsArray(albums) {
    return albums.reduce((result, item, index) => {
      const chunkIndex = Math.floor(index / 3);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  }

}
