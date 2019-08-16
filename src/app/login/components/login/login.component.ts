import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'moviedb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _snackBar: SnackBarService,
    private _route: Router
  ) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.pattern('[A-Za-z0-9]*')]]
    });
  }

  onSubmit(values) {
    if (this.formGroup.invalid) {
      return;
    }
    const { email, password } = values;
    this._authService
      .login(email, password)
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this._snackBar.open({
          message: 'Log in successfuly!'
        });
        this._route.navigate(['home']);
      })
      .catch(() => {
        this._snackBar.open({
          message: 'There is a problem verifying your credentials'
        });
      });
  }
}
