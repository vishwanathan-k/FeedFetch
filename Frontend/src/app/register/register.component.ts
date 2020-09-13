import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  public signupObj: any = {};
  public loading = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private _rs: RegisterService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupObj = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      status: 'Active',
    };
  }

  signupUser() {
    this.loading = true;
    this._rs.registerUser(this.signupObj).subscribe((data) => {
      if (data['statusCode'] === 200) {
        this.matSnackBar.open('Username should not be empty.', '', {
          duration: 2000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.loading = false;
        this.router.navigate(['/login']);
      }
    });
  }
}
