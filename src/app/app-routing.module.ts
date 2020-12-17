import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { HomeComponent } from './home/home.component';
import { ReadingHistoryComponent } from './reading-history/reading-history.component';
import { SearchFunctionsComponent } from './search/search-functions/search-functions.component';
import {TitleSearchComponent} from './title-search/title-search.component';
import { UserInterestsComponent } from './user-interests/user-interests.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-functions', component: SearchFunctionsComponent },
  { path: 'category-search', component: CategorySearchComponent },
  { path: 'title-search', component: TitleSearchComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'user-interests/:user', component: UserInterestsComponent },
  { path: 'reading-history/:user', component: ReadingHistoryComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
