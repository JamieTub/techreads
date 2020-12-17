import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-interests',
  templateUrl: './user-interests.component.html',
  styleUrls: ['./user-interests.component.css']
})
export class UserInterestsComponent implements OnInit {
  user: any;
  userInterests: any;
  vanillaUrl = "http://localhost:3000/";
  bookCategories: any;
  interestSelect: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.initInterestsForm();
    this.callInterests();
    this.getCategories();
  }

  initInterestsForm() {
    this.interestSelect = new FormGroup({
      intSelect: new FormControl()
    })
  }

  callInterests() {
    let id = "anon"
    this.http.get<any>(this.vanillaUrl + "interests/" + id).subscribe(response => {
      this.userInterests = response;
      console.log(this.userInterests)
    }, error => {
      console.log(error);
    })
  }

  getCategories() {
    this.http.get<any>(environment.apiUrl + "/categories").subscribe(response => {
      this.bookCategories = response;
      console.log(this.bookCategories)
    }, error => {
      console.log(error);
    })
  }

  submitInterest() {
    console.log(this.interestSelect.topic)
    this.http.post(this.vanillaUrl + "interests",
      { 'user': 'anon', 'topic': this.interestSelect.topic}).subscribe();
  }

}
