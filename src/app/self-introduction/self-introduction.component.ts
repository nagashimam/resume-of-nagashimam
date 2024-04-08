import { Component, OnInit } from '@angular/core';
import articleData from '../../assets/articles/articles.json';

interface Article {
  title: string;
  url: string;
  body_updated_at: string;
}

@Component({
  selector: 'app-self-introduction',
  standalone: true,
  imports: [],
  templateUrl: './self-introduction.component.html',
  styleUrl: './self-introduction.component.scss',
})
export class SelfIntroductionComponent implements OnInit {
  public newArticles: Article[] = [];
  public oldArticles: Article[] = [];

  public ngOnInit(): void {
    const articles = articleData.articles;

    // jsonを作る際に、日付で昇順に並べ替えてある
    const newArticlesIndex = articles.findIndex(
      (article) => new Date(article.body_updated_at).getFullYear() < 2023,
    );
    this.newArticles = articles.slice(0, newArticlesIndex);
    console.log(this.newArticles);
    this.oldArticles = articles.slice(newArticlesIndex);
    console.log(this.oldArticles);
  }
}