import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  results: any = [];

  constructor(private newsService: NewsService) {}

  search = ({ detail: { value } }) =>
    value &&
    this.newsService
      .search(value)
      .subscribe(({ articles }: any) => (this.results = articles));
}
