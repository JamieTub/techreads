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

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.initForm();
    this.loadBookDetail();
  }

  initForm() {
    this.updateHistory = new FormGroup({
      historyUpdate: new FormControl()
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
}
