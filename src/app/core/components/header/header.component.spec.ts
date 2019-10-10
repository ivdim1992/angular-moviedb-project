import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MaterialSharedModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService, SnackBarService } from 'src/app/shared/services';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule.withRoutes([]), MaterialSharedModule, HttpClientModule],
      providers: [AuthService, SnackBarService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to /', () => {
    let href = fixture.debugElement.query(By.css('a')).nativeElement.getAttribute('href');
    expect(href).toEqual('/');
  });

  it('should have a link to movies/my-list', () => {
    let isLogged = localStorage.getItem('isLogged');
    if (isLogged) {
      let href = fixture.debugElement.query(By.css('.my-list a')).nativeElement.getAttribute('href');
      expect(href).toEqual('/movies/my-list');
    }
  });

  it('should have a link to /login', () => {
    let href = fixture.debugElement.query(By.css('.login a')).nativeElement.getAttribute('href');
    expect(href).toEqual('/login');
  });
});
