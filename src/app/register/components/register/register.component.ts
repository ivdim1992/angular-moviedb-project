import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, SnackBarService } from 'src/app/shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'moviedb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  registerFormTitle: string = 'Register';

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

    // this._authService
    //   .register(email, password)
    //   .then(user => {
    //     localStorage.setItem('email', user.user.email);
    //     this._snackBar.open({
    //       message: 'Register successfuly!'
    //     });
    //     this._authService.login(email, password);
    //     this._route.navigate(['home']);
    //   })
    //   .catch(() => {
    //     this._snackBar.open({
    //       message: 'There is a with your registration'
    //     });
    //   });
  }
}
