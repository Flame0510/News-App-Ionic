import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  results: any = [];

  constructor(private newsService: NewsService) {}

  search = ({ detail: { value } }) =>
    value &&
    this.newsService
      .search(value)
      .subscribe(({ articles }: any) => (this.results = articles));
}
