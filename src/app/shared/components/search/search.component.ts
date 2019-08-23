import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    const query = values.search;
    this._router.navigate(['movies/search'], { queryParams: { search: query } });
    this.formGroup.reset();
  }
}
