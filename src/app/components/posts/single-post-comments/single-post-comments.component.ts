import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { PostComment } from 'src/app/models/post-comment';
@Component({
  selector: 'app-single-post-comments',
  templateUrl: './single-post-comments.component.html',
  styleUrls: ['./single-post-comments.component.css']
})
export class SinglePostCommentsComponent implements OnInit {

  @Input() postId;
  comments: PostComment[];
  errorMsg: String;
  loading: Boolean = true;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService
      .getPostComments(this.postId)
      .subscribe((comments: PostComment[]) => {
        this.comments = comments;
        this.loading = false;
      },
        error => {
          this.errorMsg = error;
          this.loading = false;
        });
  }

}
