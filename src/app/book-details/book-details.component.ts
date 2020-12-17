import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.loadBookDetail();
    this.user();
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
