import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search-functions',
  templateUrl: './search-functions.component.html',
  styleUrls: ['./search-functions.component.css']
})
export class SearchFunctionsComponent implements OnInit {
  title = "Techreads Search";
  books: any;

  constructor(private http: HttpClient, private HttpClientModule: HttpClientModule) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.http.get<any>('http://localhost:3000/books').subscribe(response => {
      this.books = response;
    }, error => {
      console.log(error);
    })
  } 

}
