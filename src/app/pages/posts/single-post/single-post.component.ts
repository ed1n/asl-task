import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  postId: Number;
  post: Post;
  errorMsg: String;
  loading: Boolean = true;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.postId = params.id;
    });
  }

  ngOnInit() {

    this.postService
      .getPostById(this.postId)
      .subscribe((post: Post) => {
        this.post = post;
        this.loading = false;
      },
        error => {
          this.errorMsg = error;
          this.loading = false;
        });
  }


}
