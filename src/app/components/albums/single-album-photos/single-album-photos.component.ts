import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-single-album-photos',
  templateUrl: './single-album-photos.component.html',
  styleUrls: ['./single-album-photos.component.css']
})
export class SingleAlbumPhotosComponent implements OnInit {

  @Input() albumId;
  photos: Photo[];
  chunkedPhotos: Array<Photo[]>;
  errorMsg: String;
  loading: Boolean = true;

  modalImage: string;
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService
      .getAlbumPhotos(this.albumId)
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
        this.chunkedPhotos = this.chunkAlbumsPhotosArray(this.photos.slice(0, 100));
        this.loading = false;
      },
        error => {
          this.errorMsg = error;
          this.loading = false;
        });
  }

  chunkAlbumsPhotosArray(photos) {
    return photos.reduce((result, item, index) => {
      const chunkIndex = Math.floor(index / 6);
      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  }

  showModal(image) {
    this.modalImage = image;
  }

}
