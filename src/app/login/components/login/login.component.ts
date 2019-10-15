import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/services';
import { PasswordLengthValidator } from 'src/app/shared/validators';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromAppStore from '@appStore/store.reducer';
import * as fromAuthActions from '@authStore/auth.actions';
import * as fromAuthSelectors from '@authStore/auth.selectors';

@Component({
  selector: 'moviedb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  loginFormTitle: string = 'Login';
  isLoading: Observable<boolean> = this._store.select(fromAuthSelectors.selectLoading);
  storeSub: Subscription;
  error: Observable<string> = this._store.select(fromAuthSelectors.selectAuthError);

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: SnackBarService,
    private _store: Store<fromAppStore.AppState>
  ) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, PasswordLengthValidator.getValidator()]]
    });

    this.storeSub = this.error.subscribe(err => {
      if (err) {
        this._snackBar.open({
          message: err
        });
      }
    });
  }

  onSubmit(values) {
    if (this.formGroup.valid) {
      this._store.dispatch(new fromAuthActions.LoginStart(this.formGroup.value));
    }
  }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}
