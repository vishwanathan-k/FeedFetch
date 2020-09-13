import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedComponent } from './feed/feed.component';
import { FollowersComponent } from './followers/followers.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent,
  children: [{
    path: 'feed',
    component: FeedComponent
  }, {
    path: 'followers',
    component: FollowersComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }]
}, {
  path: 'login',
  component: LoginComponent
},{
  path: 'register',
  component: RegisterComponent
}, {
  redirectTo: 'login',
  path: '**'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
