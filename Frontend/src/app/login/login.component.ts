import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  public loading = false;
  public signinObj: any = {};
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private _ls: LoginService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signinObj = {
      email: '',
      password: '',
    };
  }

  signinUser() {
    this.loading = true;
    this._ls.loginUser(this.signinObj).subscribe((data) => {
      console.log('====================>', data['_isSuccess']);
      if (data['statusCode'] === 200) {
        sessionStorage.setItem('token', data['data']);
        sessionStorage.setItem('user_id', data['user_id']);
        this.matSnackBar.open('Username should not be empty.', '', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.loading = false;
        this.router.navigate(['/dashboard/feed']);
      } else if (data['statusCode'] === 201) {
        this.matSnackBar.open('Username empty vlaue is not accepted.', '', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.loading = false;
      } else if (data['statusCode'] === 202) {
        this.matSnackBar.open('Password empty vlaue is not accepted.', '', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.loading = false;
      } else if (data['statusCode'] === 404) {
        this.matSnackBar.open('User does not exist.', '', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.loading = false;
      } else if (data['statusCode'] === 203) {
        this.matSnackBar.open('Password dose not match.', '', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.loading = false;
      }
    });
  }
}
