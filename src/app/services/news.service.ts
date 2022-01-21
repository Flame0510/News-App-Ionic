import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews = () =>
    this.http.get(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=64087bbc6a1446f1a2bfb6cf8b0da73d'
    );

  search = (q: string) =>
    this.http.get(
      `https://newsapi.org/v2/everything?q=${q}&language=it&sortBy=publishedAt&apiKey=64087bbc6a1446f1a2bfb6cf8b0da73d`
    );
}
