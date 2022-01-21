import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  news: any;
  modalVisibility: boolean = true;

  @ViewChild('title') title: any;
  @ViewChild('description') description: any;
  @ViewChild('imageUrl') imageUrl: any;

  constructor(
    private newsService: NewsService,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.newsService
      .getNews()
      .subscribe((news: any) => (this.news = news.articles));
  }

  addNews = () => {
    if ((this.title.value, this.description.value, this.imageUrl.value)) {
      this.news.push({
        title: this.title.value,
        content: this.description.value,
        urlToImage: this.imageUrl.value,
      });

      this.news.reverse();

      this.toggleModal();
    }
  };

  deleteNews = (articleKey: number) =>
    (this.news = this.news.filter(
      (article: any, key: number) => key !== articleKey
    ));

  toggleModal = () =>
    (this.modalVisibility = this.modalVisibility ? false : true);

  async presentActionSheet(articleKey: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Do you want cancel this article?',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.deleteNews(articleKey);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
