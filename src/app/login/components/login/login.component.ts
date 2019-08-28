import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, SnackBarService } from 'src/app/shared/services';
import { PasswordLengthValidator } from 'src/app/shared/validators';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'moviedb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  loginFormTitle: string = 'Login';
  token;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _snackBar: SnackBarService,
    private _route: Router
  ) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, PasswordLengthValidator.getValidator()]]
    });
  }

  onSubmit(values) {
    if (this.formGroup.invalid) {
      return;
    }
    const { username, password } = values;
    const credentials = { username, password };
    this._authService
      .startLogin(credentials)
      .toPromise()
      .then(session => {
        let session_id = session.session_id;

        this._authService.setSession(session_id);
        this._snackBar.open({
          message: 'Log in successfuly!'
        });
        this._route.navigate(['home']);
      })
      .catch(err => {
        this._snackBar.open({
          message: 'Your credentials are incorrect'
        });
      });
  }
}
