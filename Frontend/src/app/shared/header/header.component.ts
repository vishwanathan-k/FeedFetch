import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
          label: 'Feed',
          link: './feed',
          index: 0
      }, {
          label: 'Followers',
          link: './followers',
          index: 1
      }, {
          label: 'Post',
          link: './posts',
          index: 2
      },
  ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }

  logout(){
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }

}
