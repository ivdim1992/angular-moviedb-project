import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListComponent } from './my-list.component';
import { UserService, SnackBarService } from 'src/app/shared/services';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialSharedModule } from 'src/app/material/material.module';

describe('MyListComponent', () => {
  let component: MyListComponent;
  let fixture: ComponentFixture<MyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyListComponent],
      imports: [HttpClientTestingModule, CommonModule, RouterTestingModule.withRoutes([]), MaterialSharedModule],
      providers: [UserService, SnackBarService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
