import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews = () =>
    this.http.get(
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d0857d20b63e4c5396b47ab2b2d806f5'
    );

  search = (q: string) =>
    this.http.get(
      `https://newsapi.org/v2/everything?q=${q}&language=it&sortBy=publishedAt&apiKey=d0857d20b63e4c5396b47ab2b2d806f5`
    );
}
