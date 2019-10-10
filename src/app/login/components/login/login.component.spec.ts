import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/core/guards';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/shared/services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const routes: Routes = [{ path: '', component: LoginComponent, canActivate: [AuthenticatedGuard] }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule,
        CommonModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create AuthService', () => {
    expect(AuthService).toBeTruthy();
  });

  it(`should have as h4 text 'Login'`, async(() => {
    expect(component.loginFormTitle).toEqual('Login');
  }));

  it('isLogged should be false by default', () => {
    expect(component.isLogged).toBeFalsy();
  });

  it('should call the onSubmit method', () => {
    spyOn(component, 'onSubmit');
    let elem = fixture.debugElement.query(By.css('button')).nativeElement;
    elem.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('form should be invalid', async(() => {
    component.formGroup.controls['username'].setValue('');
    component.formGroup.controls['password'].setValue('');
    expect(component.formGroup.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.formGroup.controls['username'].setValue('asdasd');
    component.formGroup.controls['password'].setValue('123456');
    expect(component.formGroup.valid).toBeTruthy();
  }));
});
