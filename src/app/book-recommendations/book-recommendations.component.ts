import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-recommendations',
  templateUrl: './book-recommendations.component.html',
  styleUrls: ['./book-recommendations.component.css']
})
export class BookRecommendationsComponent implements OnInit {
  vanillaUrl = "http://localhost:3000/";
  readingHistory: any[] = [];
  books: any[] = [];
  recommendBooks: any[] = [];
  book: any;
  userInterests: any;
  bookCategories: any;
  userId = 'anon';
  simBooks: any[] = [];
  historyBooks: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.callInterests();
  }

  getRecBooks() {

    for (var b = 0; b < this.userInterests.length; b++) {
      for (var c = 0; c < this.books.length; c++) {
        if (this.books[c].category == this.userInterests[b].topic) {
          this.simBooks.push(this.books[c])
        }
      }
    }
    this.recommendBooks = this.simBooks;
    console.log(this.recommendBooks)
  }

  callInterests() {
    this.http.get<any>(this.vanillaUrl + "interests/" + this.userId).subscribe(response => {
      this.userInterests = response;
      this.getCategories();
      console.log(this.userInterests)
    }, error => {
      console.log(error);
    })
  }

  getCategories() {
    this.http.get<any>(environment.apiUrl + "/categories").subscribe(response => {
      this.bookCategories = response;
      this.getReadingHistory();
      console.log(this.bookCategories)
    }, error => {
      console.log(error);
    })
  }

  getReadingHistory() {
    this.http.get<any>(this.vanillaUrl + 'history/anon')
      .subscribe(entry => {
        entry.forEach(e => {
          this.http.get<any>(environment.apiUrl + '/' + e.book)
            .subscribe(book => {
              let matchingBook: any = book;
              matchingBook.date = e.date;
              this.readingHistory.push(matchingBook);
            })
        })
        this.getBooks()
      })
  }

  getBooks() {
    this.http.get<any>(environment.apiUrl).subscribe(response => {
      this.books = response;
      this.getRecBooks();
    }, error => {
      console.log(error);
    })
  }
}
