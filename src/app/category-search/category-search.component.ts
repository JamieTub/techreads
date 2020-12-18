import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent implements OnInit {
  title = "Techreads Category Search";
  books: any;
  categorySearch: any;
  catResult: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBooks();
    this.initForm();
  }

  getBooks() {
    this.http.get<any>(environment.apiUrl).subscribe(response => {
      this.books = response;
    }, error => {
      console.log(error);
    })
  }

  initForm() {
    this.categorySearch = new FormGroup({
      bookCategory: new FormControl()
    })
  }

  searchForCategory() {
    console.log(this.categorySearch.value.bookCategory);
    this.http.get<any>(environment.apiUrl + '/category/'
      + this.categorySearch.value.bookCategory).subscribe(response => {
        this.catResult = response;
        console.log(this.catResult)
      }, error => {
        console.log(error);
      })
  }

}
