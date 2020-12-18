import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reading-history',
  templateUrl: './reading-history.component.html',
  styleUrls: ['./reading-history.component.css']
})
export class ReadingHistoryComponent implements OnInit {
  vanillaUrl = "http://localhost:3000/";
  readingHistory: any[] = [];
  books: any[] = [];
  book: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getReadingHistory();
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
      })
  }

}
