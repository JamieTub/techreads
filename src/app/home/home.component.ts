import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Techreads';
  books: any;

  constructor(private http: HttpClient, private HttpClientModule: HttpClientModule) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.http.get<any>(environment.apiUrl).subscribe(response => {
      this.books = response;
    }, error => {
      console.log(error);
    })
  }
}