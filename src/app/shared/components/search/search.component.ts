import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'moviedb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      search: [null, [Validators.required]]
    });
  }

  search(values) {
    if (this.formGroup.invalid) {
      return;
    }
    let control: AbstractControl = null;
    const query = values.search;
    console.log(this.formGroup);
    this._router.navigate(['movies/search'], { queryParams: { search: query } });
    this.formGroup.reset();
    this.formGroup.markAsTouched();
    Object.keys(this.formGroup.controls).forEach(search => {
      control = this.formGroup.controls[search];
      control.setErrors(null);
    });
    this.formGroup.setErrors({ invalid: false });
  }
}
