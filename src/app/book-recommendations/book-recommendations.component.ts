import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-recommendations',
  templateUrl: './book-recommendations.component.html',
  styleUrls: ['./book-recommendations.component.css']
})
export class BookRecommendationsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }



}
