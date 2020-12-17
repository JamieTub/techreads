import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.css']
})
export class TitleSearchComponent implements OnInit {
  title = "Techreads Author Search";
  books: any;
  titleSearch: any;
  titResult: any;

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
    this.titleSearch = new FormGroup({
      bookTitle: new FormControl()
    })
  }

  searchForTitle() {
    console.log(this.titleSearch.value.bookTitle);
    this.http.get<any>(environment.apiUrl + '/search/'
      + this.titleSearch.value.bookTitle).subscribe(response => {
        this.titResult = response;
        console.log(this.titResult)
      }, error => {
        console.log(error);
      })
  }

}
