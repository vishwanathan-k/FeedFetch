import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from './feed.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  public feedArray: Array<any>;
  public followObj = {
    user_id: '',
    follower_id: '',
  };
  public loading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private feedService: FeedService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadFeeds();
  }

  loadFeeds() {
    this.loading = true;
    this.feedService.getFeeds().subscribe(
      (data) => {
        this.feedArray = data['data'];
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  follow(follower_id) {
    this.loading = true;
    this.followObj.user_id = sessionStorage.getItem('user_id');
    this.followObj.follower_id = follower_id;
    if (sessionStorage.getItem('user_id') != follower_id) {
      this.feedService.addfollower(this.followObj).subscribe(
        (data) => {
          if (data['statusCode'] === 200) {
            this.matSnackBar.open('Followers has been added.', '', {
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

  post(id) {
    this.router.navigate(['/dashboard/posts'], {
      queryParams: { id: id },
    });
  }
}
