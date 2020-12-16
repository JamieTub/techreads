import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSearchResultsComponent } from './author-search-results.component';

describe('AuthorSearchResultsComponent', () => {
  let component: AuthorSearchResultsComponent;
  let fixture: ComponentFixture<AuthorSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
