import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorSearchResultsComponent } from './author-search-results/author-search-results.component';
import { HomeComponent } from './home/home.component';
import { SearchFunctionsComponent } from './search/search-functions/search-functions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search-functions', component: SearchFunctionsComponent },
  { path: 'author-search-results', component: AuthorSearchResultsComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
