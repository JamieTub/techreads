import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFunctionsComponent } from './search/search-functions/search-functions.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorySearchComponent } from './category-search/category-search.component';
import { TitleSearchComponent } from './title-search/title-search.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ReadingHistoryComponent } from './reading-history/reading-history.component';
import { UserInterestsComponent } from './user-interests/user-interests.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFunctionsComponent,
    HomeComponent,
    NavBarComponent,
    CategorySearchComponent,
    TitleSearchComponent,
    BookDetailsComponent,
    ReadingHistoryComponent,
    UserInterestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
