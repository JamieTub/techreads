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
  book: any;
  recommendedBookCats: any[] = [];
  i: any;
  topic: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.getRecBooks();
  }

  // getRecBooks() {
  //   this.http.get<any>('http://localhost:3000/interests/anon').
  //   subscribe(interest => {
  //     console.log(interest)
  //       interest.forEach(i => {

  //       })
  //     }
  //   )
  // }



}
