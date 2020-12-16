import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-functions',
  templateUrl: './search-functions.component.html',
  styleUrls: ['./search-functions.component.css']
})
export class SearchFunctionsComponent implements OnInit {
  title = "Techreads Search";
  books: any;
  authorSearch: any;

  constructor(private http: HttpClient, private HttpClientModule: HttpClientModule, private router: Router) { }

  ngOnInit() {
    this.getBooks();
    this.initForm();
  }

  getBooks() {
    this.http.get<any>('http://localhost:3000/books').subscribe(response => {
      this.books = response;
    }, error => {
      console.log(error);
    })
  }

  initForm() {
    this.authorSearch = new FormGroup({
      bookAuthor: new FormControl()
    })
  }

  searchForAuthor() {
    console.log(this.authorSearch);
    this.http.get<any>('http://localhost:3000/books/author' + this.authorSearch.value)
  }

}
