import { Component, OnInit } from '@angular/core';
import { FollowersService } from './followers.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent implements OnInit {
  followersArray: any;
  public loading = false;
  constructor(private followersService: FollowersService) {}

  ngOnInit(): void {
    this.loadFollowers();
  }

  loadFollowers() {
    this.loading = true;
    this.followersService.getFollowers().subscribe(
      (data) => {
        this.followersArray = data['data'];
        this.loading = false;
        console.log('=========================>', this.followersArray);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
