import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any;
  detailedBook: any;
  user: any;
  vanillaUrl = "http://localhost:3000/";
  updateHistory: any;
  updateReview: any;
  newReview: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.initHistoryForm();
    this.initReviewForm();
    this.loadBookDetail();
  }

  initHistoryForm() {
    this.updateHistory = new FormGroup({
      historyUpdate: new FormControl()
    })
  }

  initReviewForm() {
    this.updateReview = new FormGroup({
      reviewUpdate: new FormControl()
    })
  }

  addBookToHistory() {
    var jsonDate = (new Date()).toJSON();
    console.log(jsonDate)
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
     this.http.post(this.vanillaUrl + "history",
       { 'user': 'anon', 'book': id, 'date': jsonDate }).subscribe();
  }

  loadBookDetail() {
    let id = this.route.snapshot.paramMap.get('id')
    this.http.get<any>(environment.apiUrl + "/" + id).subscribe(response => {
      this.detailedBook = response;
      console.log(this.detailedBook)
    }, error => {
      console.log(error);
    })
  }

  submitReview(){
    console.log(this.updateReview.value.reviewUpdate)
    let id = this.route.snapshot.paramMap.get('id')
    this.http.post<any>(environment.apiUrl + '/review/' + id, {
      'reviewer': 'anon', 'review': this.updateReview.value.reviewUpdate
    }).subscribe();
    this.ngOnInit();
  }
}
