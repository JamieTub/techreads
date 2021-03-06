import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-functions',
  templateUrl: './search-functions.component.html',
  styleUrls: ['./search-functions.component.css']
})
export class SearchFunctionsComponent implements OnInit {
  title = "Techreads Author Search";
  books: any;
  authorSearch: any;
  authResult: any;

  constructor(private http: HttpClient, private HttpClientModule: HttpClientModule,
    private router: Router) { }

  ngOnInit() {
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
    this.authorSearch = new FormGroup({
      bookAuthor: new FormControl()
    })
  }

  searchForAuthor() {
    console.log(this.authorSearch.value.bookAuthor);
    this.http.get<any>(environment.apiUrl + '/authors/'
      + this.authorSearch.value.bookAuthor).subscribe(response => {
        this.authResult = response;
        console.log(this.authResult)
      }, error => {
        console.log(error);
      })
  }

}
