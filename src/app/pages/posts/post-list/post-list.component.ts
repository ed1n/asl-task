import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  filteredPosts: Post[];
  errorMsg: String;
  loading: Boolean = true;

  ascDescFilterMode: Number = 0;
  filterByIds: Number[] = [];
  filterByUserIdInput = '1';
  showIdInputErrorMsg: Boolean = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService
      .getAllPosts()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        this.filteredPosts = posts;
        this.loading = false;
        this.ascDescFilterPosts();
      },
        error => {
          this.errorMsg = error;
          this.loading = false;
        });
  }

  ascDescFilterPosts() {
    const sortAsc = function (x, y) {
      if (x.title < y.title) {
        return -1;
      } else if (x.title > y.title) {
        return 1;
      }
      return 0;
    };

    const sortDesc = function (x, y) {
      if (x.title < y.title) {
        return 1;
      } else if (x.title > y.title) {
        return -1;
      }
      return 0;
    };

    this.filteredPosts = this.ascDescFilterMode === 0 ? this.filteredPosts.sort(sortAsc) : this.filteredPosts.sort(sortDesc);
  }

  changeAscDescFilterMode() {
    this.ascDescFilterMode = this.ascDescFilterMode === 0 ? 1 : 0;
    this.ascDescFilterPosts();
  }

  updateFilterByIds() {
    const inputId = Number(Number(this.filterByUserIdInput).toFixed());
    if (inputId == null || inputId < 1 || inputId > 100) {
      this.showIdInputErrorMsg = true;
    } else if (!this.filterByIds.includes(inputId)) {
      this.showIdInputErrorMsg = false;
      this.filterByIds.push(inputId);
      this.filterPostsById();
      this.filterByUserIdInput = '';
    }
  }

  filterPostsById() {
    this.filteredPosts = this.filterByIds.length === 0 ? this.posts : this.posts.filter(post => this.filterByIds.includes(post.id));

  }

  removeFilterId(id) {
    this.filterByIds = this.filterByIds.filter(theId => theId !== id);
    this.filterPostsById();
    this.ascDescFilterPosts();
  }

}
