import { Injectable } from '@nestjs/common';
import { Article } from './data/article.dto';
import { randomUUID } from 'node:crypto';

@Injectable()
export class ArticleService {
  public articles: Article[] = [];

  addArticle(article: Article): Article[] {
    article.id = randomUUID();
    this.articles.push(article);
    return this.articles;
  }

  getAllArticle(): Article[] {
    return this.articles;
  }

  deleteArticle(id: string): Article[] {
    this.articles = this.articles.filter((article) => article.id !== id);
    return this.articles;
  }

  updateArticle(article: any): Article[] {
    const idx = this.articles.findIndex(
      (currentArticle) => (currentArticle.id = article.id),
    );
    this.articles[idx] = article;
    return this.articles;
  }
}
