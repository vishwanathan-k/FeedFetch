import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from './posts.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postArray: any;
  postId: any;
  public loading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  public postObjModal = {
    post_comment: '',
    user_id: '',
  };
  constructor(
    private postService: PostsService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.id) {
        this.postId = params.id;
        this.loadPosts(params.id);
      } else {
        console.log('else');
        this.loadPosts(sessionStorage.getItem('user_id'));
      }
    });
  }

  loadPosts(id) {
    this.loading = true;
    console.log(id);
    this.postService.getPosts(id).subscribe(
      (data) => {
        this.postArray = data['data']['post'];
        this.postArray.map((obj) => (obj['name'] = data['data']['first_name']));
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  postDatas() {
    this.loading = true;
    if (this.postId) {
      this.postObjModal.user_id = this.postId;
    } else {
      this.postObjModal.user_id = sessionStorage.getItem('user_id');
    }
    this.postService.addPostsData(this.postObjModal).subscribe(
      (data) => {
        if (data['statusCode'] === 200) {
          this.matSnackBar.open('Post has been added.', '', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.loading = false;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
